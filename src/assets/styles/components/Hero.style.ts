import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const HeroStyle = styled.section`
  height: calc(100vh - 60px);
  display: grid;
  background: no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  .image-container {
    grid-area: 1 / 1;
  }

  .hero-container {
    position: relative;
    display: grid;
    place-items: center;
    grid-area: 1 / 1;
    background: linear-gradient(
      89.42deg,
      rgba(0, 0, 0, 0.45) -7.89%,
      rgba(0, 0, 0, 0) 99.51%
    );
    height: 100vh;

    .container {
      height: 100%;
    }
  }

  .hero-content {
    height: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding-bottom: 160px;
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
        padding-bottom: 24px;
        color: ${theme.lightColor};
        font-family: ${theme.primaryFonts};
      }
      .hero-link {
        background-color: ${theme.primaryColor};
        color: ${theme.lightColor};
        padding: 18px 24px;
        display: inline-block;
        border-radius: 4px;
        transition: 0.3s;

        &:hover {
          background-color: ${theme.primaryHoverColor};
        }
      }
    }
  }

  &.home-hero {
    .hero-content {
      padding-top: 140px;
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    .hero-content {
      padding-top: 64px;

      .hero-left {
        padding-bottom: 16px;

        h1 {
          padding-bottom: 16px;
        }

        .hero-text {
          color: ${theme.lightColor};
        }

        .hero-link {
          padding: 10px 22px;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenS}) {
    height: auto;
    .hero-container {
      height: auto;
    }
    &.home-hero {
      .hero-content {
        padding-top: 40px;
        .hero-left {
          padding-bottom: 0;
          .hero-text {
            padding-bottom: 16px;
          }
        }
      }
    }
    .hero-content {
      padding-top: 160px;
      .hero-left {
        padding-bottom: 0;
        .hero-text {
          padding-bottom: 16px;
        }
      }
    }
    .hero-content {
      padding-bottom: 40px;
    }
  }

  @media screen and (max-width: ${breakpoints.screenXS}) {
    .form-wrapper-container {
      .hero-content {
        padding-top: 24px;

        .hero-left {
          padding-bottom: 16px;

          h1 {
            padding-bottom: 16px;
          }

          .hero-text {
            color: ${theme.lightColor};
          }

          .hero-link {
            padding: 10px 22px;
          }
        }
      }
    }
  }
`;

export default HeroStyle;
