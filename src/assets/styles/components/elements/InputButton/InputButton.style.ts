import styled from "styled-components";
import { theme } from "constants/variables";
import { InputButtonProp } from "components/elements/InputButton/InputButton";

const InputButtonStyle = styled.div<InputButtonProp>`
  .footer-error-message {
    position: absolute;
    bottom: -18px;
    font-size: 12px;
    color: ${theme.errorColor};
    font-weight: bold;
  }
  input {
    color: ${theme.lightColor};
    padding: 12px 24px;
    border: 1px solid;
    border-right: 0;
    border-radius: 0;
    background-color: ${theme.primaryColor};
    &.input-width {
      width: 100%;
      max-width: 420px;
    }
  }
`;

export default InputButtonStyle;
