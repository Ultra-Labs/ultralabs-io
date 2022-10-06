import styled from "styled-components";
import { theme } from "constants/variables";
import { InputProps } from "components/elements/Input/Input";

export const Label = styled.label<InputProps>`
  display: block;
  margin-bottom: 24px;
  position: relative;

  .textarea {
    border: 0;
    font-size: 16px;
    padding: 10px 0;
    width: 100%;
    display: block;
    resize: none;
    border-radius: 0;
    border-bottom: 1px solid ${theme.darkColor};
    font-family: ${theme.primaryFonts};
    ::-webkit-scrollbar {
      width: 4px;
      height: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #d8d8d8;
      border-radius: 4px;
    }
    &::placeholder {
      opacity: 0;
    }

    &:not(:placeholder-shown) {
      border-bottom: 1px solid ${theme.primaryColor};
      + span {
        transform: translateY(-12px);
        font-size: 12px;
        width: 100%;
        background: white;
        z-index: 2;
      }
    }

    &:focus {
      border-bottom: 1px solid ${theme.primaryColor};
    }
  }

  span {
    position: absolute;
    top: 6px;
    left: 0;
    font-size: 16px;
    transition: 0.2s;
    color: ${theme.primaryColor};
    cursor: text;
    will-change: transform, font-size;
    transform: translateY(14px);
    line-height: 1;
    pointer-events: none;
  }

  &:focus-within {
    > span {
      transform: translateY(-12px);
      font-size: 12px;
    }
  }
`;
