import breakpoints from "constants/breakpoints";
import { theme } from "constants/variables";
import styled from "styled-components";

const OurPeopleStyle = styled.section`
  display: grid;

  .image-container {
    grid-area: 1 / 1;
  }

  .people-container {
    position: relative;
    display: grid;
    place-items: center;
    grid-area: 1 / 1;
    background: linear-gradient(
      89.42deg,
      rgba(0, 0, 0, 0.45) -7.89%,
      rgba(0, 0, 0, 0) 99.51%
    );
  }
  .people-content {
    height: 100%;
    padding-top: 160px;
    position: relative;
    z-index: 1;
    .people-left {
      max-width: 650px;
      width: 100%;
      padding-bottom: 278px;
      h2 {
        padding-bottom: 24px;
        color: ${theme.lightColor};
        font-family: ${theme.secondaryFonts};
      }
      .people-text {
        padding-bottom: 32px;
        color: ${theme.lightColor};
      }
      .people-link {
        background-color: ${theme.primaryColor};
        color: ${theme.lightColor};
        padding: 12px 40px;
        display: inline-block;
        border-radius: 4px;
        &:hover {
          background-color: ${theme.primaryHoverColor};
        }
      }
    }
  }
  @media screen and (max-width: ${breakpoints.screenMD}) {
    .people-content {
      padding-top: 48px;
      .people-left {
        padding-bottom: 160px;
        .people-text {
          padding-bottom: 32px;
          color: ${theme.lightColor};
        }
        .people-link {
          padding: 10px;
        }
      }
    }
  }
`;

export default OurPeopleStyle;
