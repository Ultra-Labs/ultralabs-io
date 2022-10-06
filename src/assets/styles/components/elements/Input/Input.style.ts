import styled from "styled-components";
import { theme } from "constants/variables";
import { InputProps } from "components/elements/Input/Input";

export const Label = styled.label<InputProps>`
  display: block;
  margin-bottom: 32px;
  position: relative;

  /*remove from here*/

  .input::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  .input[type="number"] {
    -moz-appearance: textfield;
  }

  .input {
    width: 100%;
    outline: none;
    background-color: ${theme.lightColor};
    color: ${theme.darkColor};
    -moz-border: 0;
    -webkit-border: 0;
    border: 0;
    border-radius: 0;
    font-size: 16px;
    border-bottom: 1px solid ${theme.darkColor};
    padding: 10px 0;
    caret-color: ${(props) =>
      props?.errorMessage ? props.theme.error : props.theme.primary};
    display: block;

    &::placeholder {
      opacity: 0;
    }

    &:not(:placeholder-shown) {
      border-bottom: 1px solid ${theme.primaryColor};
      + span {
        transform: translateY(-7px);
        font-size: 12px;
      }
    }

    &:focus {
      border-bottom: 1px solid ${theme.primaryColor};
    }
  }

  .textarea {
    resize: none;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    transition: 0.2s;
    color: ${theme.primaryColor};
    cursor: text;
    will-change: transform, font-size;
    transform: translateY(20px);
    line-height: 1;
    pointer-events: none;
  }

  &:focus-within {
    > span {
      transform: translateY(-7px);
      font-size: 12px;
    }
  }
`;
