import React, { useCallback, FC, useState, ChangeEvent } from "react";
// import { useDropzone } from "react-dropzone";
import { Line } from "rc-progress";
import { theme } from "constants/variables";
import Icon from "../Icon/Icon";

type UploaderProps = {
  name?: string;
  // handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: React.HTMLInputTypeAttribute;
  // id?: string;
  setFile?: (file: { value }) => void;
  onDrop?: (file: { value }) => void;
  myFiles?: any;
  setMyFiles?: any;
  progressbar?: any;
  useDropzone?: any;
};

const Uploader: FC<UploaderProps> = ({
  name,
  // handleFileChange,
  type,
  // id,
  setFile,
  onDrop,
  myFiles,
  setMyFiles,
  progressbar,
  useDropzone,
}) => {
  // const [myFiles, setMyFiles] = useState([]);
  // const [progressbar, setProgressbar] = useState({
  //   percent: 0,
  // });

  // const config = {
  //   onUploadProgress: (progressEvent) => {
  //     const percent = Math.round(
  //       (progressEvent.loaded * 100) / progressEvent.total
  //     );
  //     if (percent >= 100) {
  //       setProgressbar({ percent: 100 });
  //     } else {
  //       setProgressbar({ percent });
  //     }
  //   },
  // };

  // const onDrop = useCallback((acceptedFiles) => {
  //   setProgressbar({ percent: config });
  //   setFile(acceptedFiles[0]);
  //   setMyFiles([...myFiles, ...acceptedFiles]);
  // }, []);

  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   multiple: false,
  // });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (file) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const files = myFiles.map((file) => (
    <li key={file.path} className="upload-item">
      <Icon icon="list" size={24} />
      <div className="upload-inner-container">
        <div>
          {file.path} - {file.size} bytes{" "}
          <Line
            percent={progressbar.percent}
            strokeWidth={4}
            strokeColor={`${theme.secondaryColor}`}
            strokeLinecap="square"
          />
        </div>

        <button onClick={removeFile(file)}>
          <Icon icon="close1" size={24} />
        </button>
      </div>
    </li>
  ));

  return (
    <section className="upload-container">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="drop-container"
      >
        <input
          {...getInputProps()}
          name={name}
          type={type}
          // id={id}
          // onChange={handleFileChange}
        />
        <Icon icon="cloude" size={24} />
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
  );
};

export default Uploader;
