import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";
const FadeInScrollStyle = styled.div`
  .service-list {
    padding: 160px 0;
  }
  .service-item {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    .wrapper-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .service-part {
      width: calc(33.33% - 24px);
      margin: 0 12px;
      text-align: center;
      p {
        padding: 140px 24px;
      }
      h3 {
        font-size: 56px;
        font-family: ${theme.secondaryFonts};
      }
    }
    &:first-child {
      .service-part {
        &:first-child {
          background-color: ${theme.darkColor};
          p {
            color: ${theme.primaryColor};
            padding: 0;
          }
          h3 {
            color: ${theme.lightColor};
          }
        }
      }
    }
    &:nth-child(2) {
      .service-part {
        &:first-child {
          order: 2;
          background-color: ${theme.primaryColor};
          p {
            color: ${theme.lightColor};
            padding: 0;
          }
          h3 {
            color: ${theme.darkColor};
          }
        }
        &:nth-child(2) {
          order: 3;
        }
      }
    }
    &:nth-child(3) {
      .service-part {
        &:first-child {
          h3 {
            color: ${theme.primaryColor};
          }
          p {
            padding: 0;
          }
        }
      }
    }
    &:nth-child(4) {
      .service-part {
        &:first-child {
          order: 2;
          background-color: ${theme.darkColor};
          p {
            color: ${theme.primaryColor};
            padding: 0;
          }
          h3 {
            color: ${theme.lightColor};
          }
        }
        &:nth-child(2) {
          order: 3;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenXL}) {
    .service-item {
      .service-part {
        width: calc(33.33% - 12px);
        margin: 0 6px;
        p {
          padding: 64px 12px;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    .service-list {
      padding: 64px 0;
    }
    .service-item {
      display: block;
      .service-part {
        width: 100%;
        margin: 0;
        p {
          padding: 24px 0;
        }
        &:first-child {
          padding: 120px 0;
        }
      }
    }
  }
`;
export default FadeInScrollStyle;
