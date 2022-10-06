import React, { useState, useCallback, useMemo, useEffect, FC } from "react";
import ContactFormStyle from "assets/styles/components/ContactForm.style";
import Input from "components/elements/Input/Input";
import TextareaResize from "components/elements/Textarea/TextareaResize";
import Select from "components/elements/Select/Select";
import Icon from "./elements/Icon/Icon";
import { useDropzone } from "react-dropzone";
import { Line } from "rc-progress";
import { theme } from "constants/variables";
import { useCareersList } from "hooks/useCareersList";
import { StaticImage } from "gatsby-plugin-image";
import Button from "components/elements/Button/Button";

interface ContactFormProps {
  className?: string;
  wrapperClassName?: string;
  wrapperContainerClassName?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  handleChange?: (e: any) => void;
  dropdownIsVisible?: boolean;
  fileIsVisible?: boolean;
  positionTitle?: string;
  nameError?: string;
  phoneError?: string;
  emailError?: string;
  selectedOptionError?: string;
  formName?: string;
  contactTitle?: string;
}

const ContactForm: FC<ContactFormProps> = ({
  wrapperClassName = "",
  wrapperContainerClassName = "",
  dropdownIsVisible,
  fileIsVisible,
  formName,
  positionTitle,
  contactTitle,
}) => {
  const data = useCareersList();
  const initialOptions = useMemo(() => {
    return data.map(({ positionTitle: label, positionLabel: value }) => {
      return {
        label,
        value,
      };
    });
  }, []);

  const initialOptionValue = initialOptions?.find(
    (options) => options.label === positionTitle
  )?.value;

  const [formState, setFormState] = useState({
    jobPosition: initialOptionValue || "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [file, setFile] = useState({});
  const [errorMessages, setErrorMessages] = useState({
    nameError: "",
    phoneError: "",
    emailError: "",
    positionError: "",
  });

  const [options, setOptions] = useState([]);
  const [myFiles, setMyFiles] = useState([]);
  const [progressbar, setProgressbar] = useState<any>({
    percent: 0,
  });
  const [uploaded, setUploaded] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const emailRegex = /[A-Za-z0-9\._%+-]+@[a-z0-9\.-]+\.[a-z]{1,4}\S$/g;

  const phoneRegex = /^\+?([0-9]){7,}$/;
  const regexp = /^\+?([0-9]){0,}$/;

  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let positionError = "";

    if (!formState.name) {
      nameError = "This field is required.";
    }

    if (!formState.email) {
      emailError = "This field is required.";
    } else if (!emailRegex.test(formState.email)) {
      emailError = "Incorrect email address.";
    }

    if (!formState.phone) {
      phoneError = "This field is required.";
    } else if (!phoneRegex.test(formState.phone)) {
      phoneError = "Incorrect phone number.";
    }

    if (!formState.jobPosition && dropdownIsVisible) {
      positionError = "This field is required.";
    }

    if (emailError || nameError || phoneError || positionError) {
      setErrorMessages({
        nameError,
        emailError,
        phoneError,
        positionError,
      });

      return false;
    }

    return true;
  };

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    fetch("/", {
      method: "POST",
      body: encode({ "form-name": formName, ...formState, file }),
    })
      .then(() => setSuccess(true))
      .catch((error) => setError(error));
  };

  const onDrop = useCallback((acceptedFiles) => {
    setTimeout(() => {
      setUploaded(true);
    }, 800);
    setProgressbar({ percent: 100 });
    setFile(acceptedFiles[0]);
    setMyFiles([...myFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  const removeFile = (file) => () => {
    setUploaded(false);
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const spaceCharCode = (event) => {
    if (event.keyCode == 32) {
      event.preventDefault();
    }
  };

  const spaceCharDot = (event) => {
    if (event.keyCode == 190 || event.keyCode == 110) {
      event.preventDefault();
    }
  };

  const handleChanegeNumber = (e) => {
    const value = e.target.value;
    if (regexp.test(value)) {
      setFormState({ ...formState, phone: value });
    }
  };

  const limitedBites = "5242880";

  const files = myFiles.map((file) => (
    <li key={file.path} className="upload-item">
      <div className="upload-block">
        <Icon icon="list" size={24} color={theme.darkColor} />
        <div className="upload-inner-container">
          <div>
            {`${file.path} - ${(file.size / 1000000).toFixed(2)} MB`}
            <Line
              percent={progressbar.percent}
              strokeWidth={4}
              strokeColor={
                file.size < limitedBites ? theme.successColor : theme.errorColor
              }
              strokeLinecap="square"
            />
          </div>

          <button onClick={removeFile(file)}>
            <Icon icon="close1" size={24} color={theme.darkColor} />
          </button>
        </div>
      </div>

      {uploaded &&
        (file.size < limitedBites ? (
          <div className="file-message">
            <Icon
              icon="my-check"
              className="success"
              size={24}
              color={theme.successColor}
            />

            <p className="file-message-success">Upload completed</p>
          </div>
        ) : (
          <div className="file-message">
            <Icon
              icon="alert"
              className="error"
              size={24}
              color={theme.errorColor}
            />
            <p className="file-message-error">
              The file is too big. The size limit is 5MB.
            </p>
          </div>
        ))}
    </li>
  ));

  return (
    <ContactFormStyle className={wrapperContainerClassName}>
      <div className={`form-container ${wrapperClassName}`}>
        {success && (
          <div className="message-block">
            <div>
              <StaticImage src="../assets/images/success.png" alt="img" />
              <h2>Thank You</h2>
              <p className="body1">
                Your message has been successfully submitted. We'll get back to
                you soon.
              </p>
            </div>
          </div>
        )}
        {error && (
          <div className="message-block">
            <div>
              <StaticImage src="../assets/images/error.png" alt="img" />
              <h2>OOPS!</h2>
              <p className="body1">
                Sorry your message has not been sent. Please try again.
              </p>
            </div>
          </div>
        )}
        <div className={`${success ? "form-hide" : ""} w-100`}>
          <h2>{contactTitle}</h2>
          <form
            onSubmit={handleSubmit}
            name={formName}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            noValidate
          >
            <input type="hidden" name="form-name" value={formName} />
            <div className="inputs-container">
              <Input
                className="inputs-block"
                label="Full name*"
                handleChange={handleChange}
                type="text"
                id="name"
                name="name"
                value={formState.name}
                errorMessage={errorMessages.nameError}
              />
              <Input
                className="inputs-block"
                label="Phone number*"
                handleChange={handleChanegeNumber}
                type="tel"
                id="phone"
                name="phone"
                onKeyDown={(e) => {
                  spaceCharDot(e);
                }}
                value={formState.phone.trim()}
                errorMessage={errorMessages.phoneError}
              />
            </div>
            <Input
              label="Email address*"
              handleChange={handleChange}
              onKeyDown={(e) => {
                spaceCharCode(e);
              }}
              type="email"
              id="email"
              name="email"
              value={formState.email}
              errorMessage={errorMessages.emailError}
            />
            {dropdownIsVisible && (
              <Select
                id="jobPosition"
                name="jobPosition"
                options={options}
                onChange={(e) =>
                  setFormState({ ...formState, jobPosition: e.value })
                }
                errorMessage={errorMessages.positionError}
              />
            )}

            <TextareaResize
              label="Message"
              value={formState.message}
              handleChange={handleChange}
              id="message"
              name="message"
            />

            {fileIsVisible && (
              <section className="upload-container">
                <div
                  {...getRootProps({ className: "dropzone" })}
                  className="drop-container"
                >
                  <input {...getInputProps()} name="file" />
                  <Icon icon="cloude" size={24} color={theme.darkColor} />
                  <p>Drag and drop here</p>
                  <p>or</p>
                  <p>Browse here</p>
                </div>
                {!!files.length && (
                  <aside>
                    <ul>{files}</ul>
                  </aside>
                )}
              </section>
            )}

            <Button
              size={"md"}
              variant={"primary"}
              rounded={"primary"}
              type={"submit"}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </ContactFormStyle>
  );
};

export default ContactForm;
