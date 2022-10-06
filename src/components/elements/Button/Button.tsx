import React, { FC } from "react";
import { ButtonStyle } from "assets/styles/components/elements/Button/Button.style";

type BtnRef = HTMLButtonElement;
export type ButtonsProps = {
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<BtnRef>;
  size: "lg" | "md" | "sm" | "xs";
  variant: "primary" | "secondary" | "light";
  rounded: "primary" | "secondary";
};

const Button: FC<ButtonsProps> = ({
  children,
  className = "",
  onClick,
  disabled,
  size,
  variant,
  rounded,
  type,
}) => {
  return (
    <ButtonStyle
      className={className}
      onClick={onClick}
      disabled={disabled}
      size={size}
      variant={variant}
      rounded={rounded}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
