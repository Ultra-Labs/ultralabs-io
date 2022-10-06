import { createGlobalStyle } from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

export const BaseStyles = createGlobalStyle`

  body {
    font-size: 16px;
    line-height: 1.5;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    overflow-x: hidden;
    font-family: ${theme.primaryFonts};
  }
  main {
    padding-top: 60px;
  }
  .container {
    width: 100%;
    max-width: 1840px;
    padding: 0 120px;
    margin: 0 auto;
  }
  @media screen and (max-width: ${breakpoints.screenXL}) {
    .container {
      padding: 0 40px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: ${breakpoints.screenSM}) {
    .container {
      padding: 0 16px;
      margin: 0 auto;
    }
  }
`;

export default BaseStyles;
