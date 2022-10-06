import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const AboutUsStyle = styled.div`
  .about-container {
    width: 100%;
    max-width: 1362px;
    margin: auto;
    padding: 160px 16px;
    p {
      text-align: center;
    }
  }
  .service-container {
    background-color: ${theme.darkColor};
    padding: 64px 0;
    color: ${theme.lightColor};
    h2 {
      color: ${theme.secondaryColor};
      padding-bottom: 24px;
      font-family: ${theme.secondaryFonts};
    }
    p {
      width: 100%;
      max-width: 1030px;
    }
    a {
      margin: 80px auto 0;
      padding: 12px 32px;
      border-radius: 4px;
      background-color: ${theme.primaryColor};
      color: ${theme.lightColor};
      display: table;
      &:hover {
        background-color: ${theme.primaryHoverColor};
      }
    }
  }
  .service-list {
    display: flex;
    padding-top: 88px;
    li {
      text-align: center;
      width: calc(25% - 24px);
      margin-left: 12px;
      margin-right: 12px;
    }
    h3 {
      color: ${theme.secondaryColor};
      padding-bottom: 24px;
      font-family: ${theme.secondaryFonts};
    }
  }
  .value-container {
    background-color: ${theme.primaryColor};
  }

  .value-inner-container {
    display: flex;
  }
  .value-text-block {
    padding: 64px 160px 64px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: calc(100% - 520px);
    h2 {
      color: ${theme.lightColor};
      padding-bottom: 16px;
    }
    p {
      color: ${theme.lightColor};
    }
  }
  .value-list {
    display: flex;
    flex-wrap: wrap;
    padding: 64px 0 40px;
  }
  .value-item {
    width: calc(50% - 24px);
    margin: 0 12px 24px;
    max-width: 247px;
  }

  .box {
    perspective: 247px;
  }

  .fill {
    padding: 24px;
    background-color: ${theme.lightColor};
    border-radius: 8px;
    width: 100%;
    max-width: 247px;
    transition: 0.5s ease;
    h3 {
      padding-top: 16px;
      font-family: ${theme.secondaryFonts};
      color: ${theme.darkColor};
    }
    p {
      padding-top: 8px;
      color: ${theme.darkColor};
      min-height: 180px;
    }
  }
  .rotateY:hover .fill {
    transform: rotateY(4deg);
  }
  .workers-container {
    padding-top: 160px;
    h2 {
      color: ${theme.secondaryColor};
      padding-bottom: 24px;
      font-family: ${theme.secondaryFonts};
    }
    p {
      color: ${theme.darkColor};
      padding-bottom: 48px;
      width: 100%;
      max-width: 655px;
    }
  }
  .workers-list {
    display: flex;
    flex-wrap: wrap;
  }
  .workers-item {
    width: calc(33.33% - 24px);
    margin: 0 12px 48px;
    max-width: 517px;
    text-align: center;
    h3 {
      padding-top: 40px;
    }
    h4 {
      padding-top: 24px;
    }
  }

  .info-container {
    padding-top: 112px;
    h2 {
      color: ${theme.secondaryColor};
      padding-bottom: 64px;
      text-align: center;
    }
  }

  .info-list {
    display: flex;
    width: 100%;
    max-width: 992px;
    padding-bottom: 160px;
    margin: auto;
  }

  .info-item {
    width: 33.33%;
    text-align: center;

    .info-number {
      font-size: 88px;
      line-height: 96px;
      font-weight: 700;
      font-family: ${theme.secondaryFonts};
      color: ${theme.darkColor};
      padding-bottom: 32px;
      display: inline-block;
    }
    p {
      color: ${theme.primaryColor};
    }
  }
  .portfolio-block {
    padding-top: 160px;
    h2 {
      font-family: ${theme.secondaryFonts};
      color: ${theme.secondaryColor};
      padding-bottom: 16px;
    }
    p {
      padding-bottom: 48px;
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    .about-container {
      padding: 64px 16px;
      p {
        text-align: center;
      }
    }

    .service-container {
      a {
        margin: 48px auto 0;
      }
    }

    .service-list {
      display: block;
      padding-top: 48px;
      li {
        text-align: center;
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        &:not(:first-child) {
          padding-top: 48px;
        }
      }
    }
    .value-inner-container {
      display: block;
    }
    .value-text-block {
      max-width: unset;
    }
    .value-text-block {
      padding: 64px 0 0;
    }
    .value-list {
      padding: 32px 0 64px;
      width: 100%;
      max-width: 548px;
    }

    .workers-container {
      padding-top: 64px;
      h2 {
        padding-bottom: 16px;
      }
      p {
        padding-bottom: 24px;
        max-width: 100%;
      }
    }

    .workers-item {
      width: calc(50% - 24px);
      margin-bottom: 24px;
      h3 {
        padding-top: 24px;
      }
    }

    .portfolio-block {
      padding-top: 64px;
    }
  }

  @media screen and (max-width: ${breakpoints.screenSM}) {
    .rotateY:hover .fill {
      transform: none;
    }
    .info-container {
      padding-top: 64px;
      h2 {
        padding-bottom: 24px;
      }
    }
    .info-list {
      flex-direction: column;
      align-items: center;
      max-width: 100%;
      padding-bottom: 64px;
    }

    .info-item {
      width: 100%;
      &:not(:last-child) {
        padding-bottom: 16px;
      }
      .info-number {
        font-size: 80px;
        line-height: 132px;
        padding-bottom: 16px;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenS}) {
    .value-item {
      width: 100%;
      margin: 0 0 16px;
      max-width: 100%;
    }
    .fill {
      max-width: 100%;
      p {
        min-height: unset;
      }
    }
    .workers-item {
      width: 100%;
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;
export default AboutUsStyle;
