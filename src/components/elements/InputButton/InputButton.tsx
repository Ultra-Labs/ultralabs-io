import React, { FC, useState } from "react";
import Button from "components/elements/Button/Button";
import InputButtonStyle from "assets/styles/components/elements/InputButton/InputButton.style";
import { theme } from "constants/variables";

export type InputButtonProp = {
  formName?: string;
  errorMessages?: any;
};

const InputButton: FC<InputButtonProp> = ({ formName }) => {
  const [value, setValue] = useState({ email: "" });
  const [errorMessages, setErrorMessages] = useState({
    emailError: "",
  });

  const reg = /[A-Za-z0-9\._%+-]+@[a-z0-9\.-]+\.[a-z]{1,4}\S$/g;

  const validate = () => {
    let emailError = "";

    if (!value.email) {
      emailError = "This field is required.";
    } else if (!reg.test(value.email)) {
      emailError = "Incorrect email address.";
    }

    if (emailError) {
      setErrorMessages({
        emailError,
      });

      return false;
    }

    return true;
  };
  const handleChange = (e) =>
    setValue({
      ...value,
      [e.target?.name]: e.target?.value,
    });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onHandleClick = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": formName,
        ...value,
      }),
    })
      .then(() => console.log("success send mesage"))
      .catch((error) => console.log("error mesage"));
    setValue({ email: "" });
    setErrorMessages({ emailError: "" });
  };

  return (
    <InputButtonStyle errorMessages={errorMessages.emailError}>
      <form
        onSubmit={onHandleClick}
        className="d-flex position-relative"
        name={formName}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        noValidate
        autoComplete="off"
      >
        <input type="hidden" name="form-name" value={formName} />
        <input
          id="email1"
          name="email"
          className="input-width"
          placeholder="Type your email here..."
          type="email"
          value={value.email}
          onChange={handleChange}
          style={{
            borderColor: errorMessages?.emailError
              ? theme.errorColor
              : theme.lightColor,
          }}
        />
        {errorMessages && (
          <p className="footer-error-message">{errorMessages.emailError}</p>
        )}
        <Button rounded="secondary" variant="light" size="md" type="submit">
          Send
        </Button>
      </form>
    </InputButtonStyle>
  );
};

export default InputButton;
