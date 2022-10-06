import React, { FC } from "react";
import { Label } from "assets/styles/components/elements/Input/Input.style";

export type InputProps = {
  id?: string;
  type?: string;
  value?: string | number;
  rows?: number;
  defaultValue?: string;
  label?: string;
  name?: string;
  className?: string;
  touched?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  onFocus?: () => void;
  onKeyPress?: () => void;
  onKeyDown?: (e) => void;
  handleChange: (e: any) => void;
  required?: boolean;
  placeholder?: string;
};

const Input: FC<InputProps> = ({
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
  onKeyDown,
  errorMessage,
  label,
  disabled = false,
  className = "",
  handleChange,
  required,
  placeholder,
  ...rest
}) => {
  return (
    <Label className={className} errorMessage={errorMessage}>
      <input
        className="input"
        id={id}
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={label}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        disabled={disabled}
        required={required}
        {...rest}
      />
      <span>{label}</span>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </Label>
  );
};

export default Input;
