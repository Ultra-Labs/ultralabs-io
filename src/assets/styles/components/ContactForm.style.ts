import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const ContactFormStyle = styled.div`
  .drop-zone-container {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-self: center;
    height: 100%;
  }
  .form-container {
    position: relative;
    width: 100%;
    max-width: 625px;
    padding: 24px 24px 24px 64px;
    background-color: ${theme.lightColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    h2 {
      color: ${theme.secondaryColor};
      font-family: ${theme.secondaryFonts};
    }
    form {
      margin-top: 16px;
      max-width: 518px;
      .selectOption {
        margin-bottom: 24px;
      }
    }
  }
  .form-inner-container {
    border-radius: 4px;
    padding: 96px 64px 80px;
    box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.25);
  }
  .inputs-container {
    display: flex;
    .inputs-block {
      width: calc(50% - 12px);
      margin-right: 12px;
      &:last-child {
        margin-left: 12px;
        margin-right: 0;
      }
    }
  }

  .message-block {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 4px;
    padding: 24px;
    h2 {
      padding-top: 40px;
    }
  }

  .upload-container {
    display: flex;
    align-items: center;
    margin-bottom: 48px;
    aside {
      width: calc(100% - 187px);
    }
  }

  .drop-container {
    border: 1px dashed ${theme.darkColor};
    padding: 16px;
    height: 155px;
    min-width: 155px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-right: 32px;
    cursor: pointer;
    p {
      color: ${theme.darkColor};
      &:not(:first-child) {
        padding-top: 4px;
      }
      &:last-child {
        color: ${theme.primaryColor};
        padding-bottom: 3px;
        border-bottom: 1px solid ${theme.secondaryColor};
      }
    }
  }

  .file-list {
    padding-left: 10px;
  }

  .upload-item {
    &:not(:first-child) {
      padding-top: 16px;
    }
    svg {
      min-width: 24px;
      &:hover {
        path {
          fill: ${theme.primaryColor} !important;
        }
      }
    }
    button {
      border: 0;
      background: unset;
      margin-left: auto;
      cursor: pointer;
    }
  }

  .upload-block {
    display: flex;
    align-items: flex-start;
    padding-bottom: 16px;
    border-bottom: 1px solid ${theme.darkColor};
    width: 100%;
  }

  .upload-inner-container {
    display: flex;
    align-items: flex-start;
    padding-left: 16px;
    width: calc(100% - 24px);
    & > div {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 12px;
    }
  }

  .rc-progress-line {
    height: 4px;
    animation: line-animation 0.8s;
    display: block;
    width: 100%;
  }

  @keyframes line-animation {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  .rc-progress-line-path {
    transition: stroke-dashoffset 0s ease 0.5s, stroke-dasharray 0s ease 0.5s,
      stroke linear 0.5s !important;
  }

  .error-message {
    position: absolute;
    top: 100%;
    transform: translateY(0px);
    color: ${theme.secondaryColor};
    font-size: 12px;
  }

  .file-message {
    padding-top: 10px;
    display: flex;
    p {
      padding-left: 18px;
      font-size: 12px;
      font-family: ${theme.primaryFonts};
      font-weight: 400;
    }
    .error {
      &:hover {
        path {
          fill: ${theme.errorColor} !important;
        }
      }
    }
    .success {
      &:hover {
        path {
          fill: ${theme.successColor} !important;
        }
      }
    }
    &-error {
      color: ${theme.errorColor};
    }
    &-success {
      color: ${theme.successColor};
    }
  }

  @media screen and (max-width: ${breakpoints.screenLG}) {
    .form-container {
      max-width: 600px;
      min-width: 480px;
    }
  }
  @media screen and (max-width: ${breakpoints.screenMD}) {
    .drop-zone-container {
      padding: 16px;
      width: 100%;
    }
    .form-container {
      max-width: unset;
      box-shadow: none;
      padding: 24px;
      min-width: unset;
      form {
        max-width: unset;
        min-width: 100%;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenS}) {
    .form-inner-container {
      padding: 24px;
    }
    .inputs-container {
      display: block;
      .inputs-block {
        width: 100%;
        margin-right: 0;
        &:last-child {
          margin-left: 0;
        }
      }
    }
    .drop-container {
      margin-right: 0;
    }
    .upload-container {
      display: block;
      aside {
        width: 100%;
        padding-top: 24px;
      }
    }
  }
`;
export default ContactFormStyle;
