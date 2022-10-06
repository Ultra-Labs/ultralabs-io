import styled from "styled-components";
import { theme } from "constants/variables";

const LoadingStyle = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1002;
  top: 0;
  left: 0;
  background: ${theme.lightColor};
  display: flex;
  justify-content: center;
  align-items: center;

  .outer {
    height: 150px;
    width: 150px;
    animation: rotateCW 1.5s infinite linear;
    .middle {
      height: 100px;
      width: 100px;
      margin: 16px;
      border-top: 8px solid transparent;
      border-left: 8px solid ${theme.lightColor};
      border-bottom: 8px solid ${theme.primaryColor};
      border-right: 8px solid ${theme.lightColor};
      animation: rotateCW 1s infinite linear;
      animation-direction: reverse;
      .inner {
        height: 50px;
        width: 50px;
        animation: rotateCW 1.2s infinite linear;
      }
    }
  }
  .outer,
  .middle,
  .inner {
    border-radius: 50%;
    box-sizing: border-box;
  }
  .outer,
  .inner {
    border-top: 8px solid transparent;
    border-left: 8px solid ${theme.primaryColor};
    border-bottom: 8px solid ${theme.lightColor};
    border-right: 8px solid ${theme.primaryColor};
    border-radius: 50%;
  }
  .middle,
  .inner {
    margin: 16px;
  }

  @keyframes rotateCW {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingStyle;
