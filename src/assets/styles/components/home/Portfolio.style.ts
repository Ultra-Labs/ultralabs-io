import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const PortfolioStyle = styled.section`
  &.portfolio-block {
    padding-top: 64px;
    background: ${theme.darkColor};

    h2 {
      padding-bottom: 24px;
      color: ${theme.lightColor};
      font-family: ${theme.secondaryFonts};
    }

    p {
      color: ${theme.lightColor};
      font-family: ${theme.secondaryFonts};
      padding-bottom: 64px;
    }
  }

  .portfolio-item {
    background: ${theme.primaryColor};
    transition: 0.3s;
    display: flex;

    &:nth-child(2n + 2) {
      background: ${theme.darkColor};
    }

    .portfolio-section {
      display: flex;
      margin: auto;
    }

    &:hover {
      cursor: pointer;
      .portfolio-section {
        background-color: rgba(49 53 172 / 50%);
      }

      .portfolio-image {
        background-color: rgb(49, 53, 172);
        opacity: 0.5;
      }
    }
  }

  .portfolio-container {
    display: flex;
  }

  .portfolio-desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 0 24px 24px;
    width: 100%;
    max-width: 380px;

    h3 {
      color: ${theme.lightColor};
      padding-bottom: 24px;
      font-family: ${theme.secondaryFonts};
    }

    h4 {
      color: ${theme.lightColor};
      font-family: ${theme.primaryFonts};
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    &.portfolio-block {
      p {
        padding-bottom: 32px;
      }
    }

    .portfolio-section {
      flex-wrap: wrap;
    }

    .portfolio-item {
      .container {
        padding: 0;
      }
    }

    .portfolio-container {
      display: block;
    }

    .portfolio-desc {
      padding: 48px 16px;
      text-align: center;
      max-width: 100%;
    }
  }
`;

export default PortfolioStyle;
