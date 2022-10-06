import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const PortfolioStyle = styled.li`
  .clumb-text-6 {
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &.portfolio-item {
    position: relative;
    max-width: calc(33.3% - 24px);
    cursor: pointer;
    margin: 0 12px 24px;
    z-index: 1;
    .front,
    .back {
      width: 100%;
      height: 100%;
      overflow: hidden;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transition: transform 0.6s linear;
      color: ${theme.lightColor};
    }
    .front {
      transform: perspective(1600px) rotateY(0deg);
    }
    .back {
      position: absolute;
      top: 0;
      background: ${theme.primaryColor};
      transform: perspective(1600px) rotateY(180deg);
    }
    &:hover {
      .front {
        transform: perspective(1600px) rotateY(-180deg);
      }
      .back {
        transform: perspective(1600px) rotateY(0deg);
      }
    }
  }

  .portfolio-desc {
    position: absolute;
    top: 0;
    left: 0;
    color: ${theme.lightColor};
    width: 100%;
    padding: 48px;
    height: 100%;
    h2,
    h3 {
      padding-bottom: 16px;
      font-family: ${theme.secondaryFonts};
      color: ${theme.lightColor};
    }
  }
  .portfolio-more-information {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${theme.lightColor};
    padding: 48px;
    a {
      padding: 12px 16px;
      border-radius: 4px;
      color: ${theme.darkBlue};
      background-color: ${theme.lightColor};
      display: inline-block;
      margin-top: 48px;
      &:hover {
        background-color: ${theme.darkBlue};
        color: ${theme.lightColor};
      }
    }
  }

  &.caroucel-item {
    max-width: 100%;
    margin: 0 6px 12px;
    .portfolio-desc {
      padding: 32px;
      h4 {
        color: ${theme.lightColor};
      }
    }

    .portfolio-more-information {
      padding: 32px;
    }
  }

  @media screen and (max-width: ${breakpoints.screenXL}) {
    &.caroucel-item {
      .portfolio-desc {
        h2,
        h3 {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    &.portfolio-item {
      margin: 0 6px 12px;
      max-width: calc(50% - 12px);
      .portfolio-desc {
        padding: 24px;
      }
      &:hover {
        .portfolio-more-information {
          padding: 24px;
        }
      }
    }
    &.caroucel-item {
      max-width: 100%;
      .portfolio-desc {
        padding: 32px;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenS}) {
    &.portfolio-item {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
      .portfolio-desc {
        height: 100%;
      }
    }
    &.caroucel-item {
      max-width: 100%;
      margin: 0 6px 12px;
      .portfolio-desc {
        padding: 32px;
      }
    }
  }
`;

export default PortfolioStyle;
