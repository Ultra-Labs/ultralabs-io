import breakpoints from "constants/breakpoints";
import { theme } from "constants/variables";
import styled from "styled-components";

const AboutUsStyle = styled.section`
  &.about-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: ${theme.primaryColor};
    .about-description-block {
      width: 100%;
      max-width: 996px;
      padding: 64px 160px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: ${theme.lightColor};
      h2 {
        align-self: flex-start;
        padding-bottom: 24px;
        font-family: ${theme.secondaryFonts};
      }
      p {
        font-weight: 300;
      }
    }
  }
  @media screen and (max-width: ${breakpoints.screenXXL}) {
    &.about-container {
      .about-description-block {
        padding: 64px 120px 64px 160px;
      }
    }
  }
  @media screen and (max-width: ${breakpoints.screenXL}) {
    &.about-container {
      .about-description-block {
        padding: 64px 40px 64px 160px;
      }
    }
  }
  @media screen and (max-width: ${breakpoints.screenMD}) {
    &.about-container {
      grid-template-columns: unset;
      .about-description-block {
        padding: 64px 16px;
      }
    }
  }
`;

export default AboutUsStyle;
