import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const IndexStyle = styled.div`
  .canvas-container {
    position: relative;
    height: 643px;
    display: grid;
    grid-area: 1 / 1;
    place-content: center;
    div {
      &:first-child {
        position: absolute;
        height: 100%;
        width: 100%;
        canvas {
          position: absolute !important;
          height: 100% !important;
          width: 100% !important;
        }
      }
    }
    .text-container {
      width: 100%;
      height: 100%;
      grid-area: 1 / 1;
      display: grid;
      padding: 0 16px;
      text-align: center;
      position: relative;
      z-index: 2;
      h2 {
        color: ${theme.lightColor};
        font-weight: 700;
        font-family: ${theme.secondaryFonts};
      }
    }
  }

  .text-description {
    padding: 176px 0;
  }
  @media screen and (max-width: ${breakpoints.screenMD}) {
    .canvas-container {
      height: 320px;
    }
    .text-description {
      padding: 32px 0;
    }
  }
`;

export default IndexStyle;
