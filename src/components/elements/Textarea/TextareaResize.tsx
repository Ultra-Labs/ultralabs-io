import React, { useEffect, useRef, FC } from "react";
import { Label } from "assets/styles/components/elements/Textarea/Textarea.style";

export type InputProps = {
  id?: string;
  type?: string;
  value?: string | number;
  rows?: number;
  defaultValue?: string;
  label: string;
  name?: string;
  className?: string;
  touched?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  onFocus?: () => void;
  onKeyPress?: () => void;
  handleChange: (e: any) => void;
};

const TextareaResize: FC<InputProps> = ({
  id,
  type,
  name,
  value,
  defaultValue,
  touched,
  onBlur,
  onChange,
  onFocus,
  onKeyPress,
  errorMessage,
  label,
  disabled = false,
  className = "",
  handleChange,
  ...rest
}) => {
  const styles: { [name: string]: React.CSSProperties } = {
    textareaDefaultStyle: {
      maxHeight: "80px",
    },
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
      scrollHeight > 80
        ? (textareaRef.current.style.overflowY = "auto")
        : (textareaRef.current.style.overflowY = "hidden");
    }
  }, [value]);

  return (
    <Label>
      <textarea
        className="textarea"
        ref={textareaRef}
        style={styles.textareaDefaultStyle}
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={label}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        disabled={disabled}
        {...rest}
      />
      <span>{label}</span>
    </Label>
  );
};

export default TextareaResize;
