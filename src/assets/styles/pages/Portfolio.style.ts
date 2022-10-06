import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const PortfolioStyle = styled.div`
  .about-container {
    background-color: ${theme.primaryColor};
    padding-top: 48px;
    padding-bottom: 160px;
  }
  .about-list {
    display: flex;
    padding-bottom: 140px;
    .about-item {
      padding-right: 120px;
      color: ${theme.lightColor};
    }
  }
  .about-block {
    width: 100%;
    max-width: 1059px;
    color: ${theme.lightColor};
  }
  .portfolio-list-section {
    padding: 160px 0;
  }

  .portfolio-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 48px;
    }
    &:nth-child(even) {
      .gatsby-image-wrapper {
        order: 2;
      }
      .portfolio-description {
        padding: 0 160px 0 120px;
      }
    }
    .portfolio-description {
      padding: 0 120px 0 160px;
      width: 100%;
      max-width: 976px;
      h2 {
        color: ${theme.secondaryColor};
        font-family: ${theme.secondaryFonts};
        padding-bottom: 16px;
      }
    }
  }

  .text-description {
    margin-top: 160px;
    padding: 160px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      max-width: 1352px;
      margin: 0 auto 64px;
    }
  }

  @media screen and (max-width: ${breakpoints.screenXL}) {
    .portfolio-section {
      &:nth-child(even) {
        .portfolio-description {
          padding: 0 20px;
        }
      }
      .portfolio-description {
        padding: 0 20px;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    .about-container {
      padding-bottom: 48px;
    }
    .about-list {
      display: block;
      padding-bottom: 32px;
      .about-item {
        padding-right: unset;
        padding-bottom: 16px;
      }
    }
    .portfolio-list-section {
      padding: 32px 0;
    }
    .portfolio-section {
      &:not(:last-child) {
        margin-bottom: 32px;
      }
      .portfolio-description {
        h2 {
          padding-bottom: 16px;
        }
      }
    }

    .text-description {
      margin-top: 64px;
      padding: 136px 16px;
      h2 {
        margin-bottom: 24px;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenSM}) {
    .portfolio-section {
      grid-template-columns: unset;
      &:nth-child(even) {
        .gatsby-image-wrapper {
          order: unset;
        }
      }
      .portfolio-description {
        h2 {
          padding-top: 32px;
        }
      }
    }
  }
`;

export default PortfolioStyle;
