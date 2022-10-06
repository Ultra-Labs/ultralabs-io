import styled from "styled-components";
import { ButtonsProps } from "components/elements/Button/Button";
import { theme } from "constants/variables";

// type ButtonsProps = {
//   type?: "button" | "submit";
//   children: React.ReactNode;
//   className?: string;
//   disabled?: boolean;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   size: "lg" | "md" | "sm" | "xs";
// };

const getSize = (props: ButtonsProps) => {
  const mapping = {
    lg: {
      padding: "18px 24px",
      fontSize: "24px",
      lineHeight: " 36px",
      height: "72px",

      mobilePadding: "10px 16px",
      mobileFontSize: "16px",
      mobileLineHeight: "24px",
      mobileHeight: "44px",
    },
    md: {
      padding: "12px 40px",
      fontSize: "16px",
      lineHeight: "24px",
      height: "48px",

      mobilePadding: "12px 40px",
      mobileFontSize: "16px",
      mobileLineHeight: "24px",
      mobileHeight: "48px",
    },
    sm: {
      padding: "18px 24px",
      fontSize: "24px",
      lineHeight: " 36px",
      height: "72px",

      mobilePadding: "10px 16px",
      mobileFontSize: "16px",
      mobileLineHeight: "24px",
      mobileHeight: "44px",
    },
    xs: {
      padding: "6px 12px",
      fontSize: "16px",
      lineHeight: " 24px",
      height: "48px",

      mobilePadding: "6px 12px",
      mobileFontSize: "16px",
      mobileLineHeight: "24px",
      mobileHeight: "48px",
    },
  };
  return mapping[props.size];
};

const getVariant = (props: ButtonsProps) => {
  const mapping = {
    primary: {
      backgroundColor: theme.primaryColor,
      color: theme.lightColor,

      backgroundColorHover: theme.primaryHoverColor,
      colorHover: theme.lightColor,
    },
    secondary: {
      backgroundColor: theme.lightColor,
      color: theme.secondaryColor,

      backgroundColorHover: theme.secondaryColor,
      colorHover: theme.lightColor,
    },
    light: {
      backgroundColor: theme.lightColor,
      color: theme.darkColor,

      backgroundColorHover: theme.darkBlue,
      colorHover: theme.lightColor,
    },
  };
  return mapping[props.variant];
};

const getRounded = (props: ButtonsProps) => {
  const mapping = {
    primary: {
      borderRadius: "4px",
    },
    secondary: {
      borderRadius: "0 4px 4px 0",
    },
  };
  return mapping[props.rounded];
};

export const ButtonStyle = styled.button<any>`
  border: 0;
  cursor: pointer;
  transition: 0.3s;
  border-radius: ${(props) => getRounded(props).borderRadius};
  color: ${(props) => getVariant(props).color};
  background-color: ${(props) => getVariant(props).backgroundColor};
  padding: ${(props) => getSize(props).padding};
  font-size: ${(props) => getSize(props).fontSize};
  line-height: ${(props) => getSize(props).lineHeight};
  height: ${(props) => getSize(props).height};
  &:not(.no-hover) {
    &:hover {
      background-color: ${(props) => getVariant(props).backgroundColorHover};
      color: ${(props) => getVariant(props).colorHover};
    }
  }

  &.disabled,
  &[disabled] {
    background-color: #a3a3ff;
    pointer-events: none;
    user-select: none;
  }

  @media (max-width: 768px) {
    padding: ${(props) => getSize(props).mobilePadding};
    font-size: ${(props) => getSize(props).mobileFontSize};
    line-height: ${(props) => getSize(props).mobileLineHeight};
    height: ${(props) => getSize(props).mobileHeight};
  }
`;
