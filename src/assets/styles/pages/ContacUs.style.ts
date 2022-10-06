import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const ContactUsStyle = styled.div`
  height: calc(100vh - 60px);
  display: grid;
  background: no-repeat center center;
  background-size: cover;
  position: relative;

  .image-container {
    grid-area: 1 / 1;
  }

  .hero-container {
    position: relative;
    grid-area: 1 / 1;
    background: linear-gradient(
      89.42deg,
      rgba(0, 0, 0, 0.45) -7.89%,
      rgba(0, 0, 0, 0) 99.51%
    );
    padding-top: 80px;
  }

  .hero-wrapper {
    display: flex;
    align-items: center;
  }

  .hero-content {
    height: 100%;
    position: relative;
    z-index: 1;

    .hero-left {
      max-width: 650px;
      width: 100%;

      h1 {
        padding-bottom: 20px;
        color: ${theme.lightColor};
        font-family: ${theme.secondaryFonts};
      }

      .hero-text {
        padding-bottom: 32px;
        color: ${theme.lightColor};
      }

      .connection {
        display: block;
        color: ${theme.lightColor};
        padding-bottom: 24px;
        pointer-events: none;
        & svg {
          margin-right: 16px;
        }
      }
    }
  }
  .form-wrapper-container {
    margin-left: auto;
  }
  @media screen and (max-width: ${breakpoints.screenMD}) {
    .hero-container {
      padding-top: 64px;
    }

    .hero-wrapper {
      flex-direction: column;
      align-items: flex-start;
    }

    .hero-content {
      .hero-left {
        padding-bottom: 0;
        max-width: 100%;

        h1 {
          padding-bottom: 16px;
          font-size: 48px;
        }

        .hero-text {
          color: ${theme.lightColor};
        }

        .connection {
          &:not(:first-child) {
            pointer-events: visible;
          }
        }
      }
    }
    .form-wrapper-container {
      margin-left: unset;
    }
    .form-inner-container {
      padding: 16px 24px;
      form {
        div {
          margin-bottom: 24px;
        }
        .inputs-container {
          margin-bottom: 0;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenSM}) {
    .hero-container {
      padding-top: 24px;
    }

    .hero-content {
      .hero-left {
        padding-bottom: 0;

        h1 {
          padding-bottom: 8px;
        }

        .hero-text {
          padding-bottom: 16px;
        }

        .connection {
          padding-bottom: 16px;
          &:not(:first-child) {
            pointer-events: visible;
          }
        }
      }
    }
    .form-wrapper-container {
      margin-left: unset;
      width: 100%;
    }
  }
  @media screen and (max-width: ${breakpoints.screenS}) {
    .hero-content {
      .hero-left {
        h1 {
          font-size: 32px;
        }
      }
    }
  }
  @media screen and (max-height: 667px) and (orientation: portrait) {
    height: 100vh;
    .hero-container {
      padding-top: 12px;
    }
    .hero-content {
      .hero-left {
        h1 {
          font-size: 24px;
        }
      }
    }
  }
`;
export default ContactUsStyle;
