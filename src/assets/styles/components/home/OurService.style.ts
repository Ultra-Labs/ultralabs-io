import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const OurServiceStyle = styled.section`
  &.service-container {
    display: grid;
  }
  .service-image-container {
    grid-area: 1 / 1;
    width: calc(50vw - 135px);
    margin-left: auto;
    margin-right: -16px;
    .service-image {
      height: 100%;
    }
  }
  .service-description-block {
    display: grid;
    grid-area: 1 / 1;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
  }
  .service-block {
    padding: 64px 160px 64px 0;
    h2 {
      align-self: flex-start;
      padding-bottom: 24px;
      color: ${theme.secondaryColor};
      font-family: ${theme.secondaryFonts};
    }

    p {
      color: ${theme.darkColor};
    }
  }

  .service-info {
    .service-image {
      position: absolute;
      z-index: -1;
      right: -16px;
      width: calc(100% - 150px);
      bottom: 0;
      top: 0;
    }

    .service-items {
      display: flex;
      flex-wrap: wrap;
      padding: 80px 0;
      width: 100%;
      max-width: 786px;
    }
  }
  .service-item {
    background-color: ${theme.darkColor};
    color: ${theme.lightColor};
    border-radius: 8px;
    width: calc(50% - 24px);
    margin-right: 12px;
    margin-left: 12px;
    margin-bottom: 24px;
    max-width: 381px;
    padding: 32px 24px 52px;
    text-align: center;

    h3 {
      position: relative;
      margin-bottom: 48px;
      font-family: ${theme.secondaryFonts};

      &:after {
        content: "";
        display: block;
        padding-bottom: 24px;
        transform: scaleX(0.5);
        border-bottom: 1px solid #fff;
        transition: transform 0.5s ease-in-out;
      }
    }

    p {
      text-align: center;
    }

    &:hover {
      h3 {
        &:after {
          transform: scaleX(1);
          border-bottom: 1px solid ${theme.primaryColor};
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    &.service-container {
      grid-template-columns: 100%;
    }
    .service-image-container {
      width: 100vw;
      margin-right: 0;
    }
    .service-description-block {
      grid-template-columns: unset;
    }
    .service-block {
      padding: 64px 0 0;
    }
    .service-info {
      margin: auto;
      .service-image {
        width: 100%;
        left: -16px;
        right: 0;
      }
    }
    .service-item {
      max-width: unset;
    }
  }
  @media screen and (max-width: ${breakpoints.screenS}) {
    .service-item {
      width: 100%;
    }
  }
`;

export default OurServiceStyle;
