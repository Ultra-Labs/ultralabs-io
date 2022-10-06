import styled from "styled-components";
import breakpoints from "constants/breakpoints";
import { theme } from "constants/variables";

const JobStyle = styled.div`
  .job-container {
    display: flex;
    position: relative;
  }
  .html-content {
    margin-top: -122px;
    width: 100%;
    max-width: 1060px;
    padding: 80px 136px 160px;
    box-shadow: 8px 8px 24px rgba(125, 152, 161, 0.24);
    background: ${theme.lightColor};
    min-height: 1800px;
    z-index: 1;
    h3 {
      color: ${theme.primaryColor};
      margin-bottom: 16px;
      font-family: ${theme.secondaryFonts};
      &:not(:first-child) {
        margin-top: 48px;
      }
    }
    ul {
      li {
        display: flex;
        &:not(:last-child) {
          padding-bottom: 8px;
        }

        &:before {
          content: "";
          width: 8px;
          height: 8px;
          min-width: 8px;
          background-color: ${theme.secondaryColor};
          border-radius: 50%;
          margin-right: 16px;
          margin-top: 8px;
        }
      }
    }
  }

  .more-container {
    margin-bottom: 184px;
    h3 {
      color: ${theme.primaryColor};
      padding-bottom: 16px;
    }
  }
  .scrolled-container {
    top: 0;
    padding: 120px 0 160px 24px;
    position: sticky;
  }
  .more-details {
    padding-bottom: 64px;
  }
  .more-item {
    h4 {
      color: ${theme.primaryColor};
      padding-bottom: 16px;
    }
    &:not(:first-child) {
      padding-top: 64px;
    }
    &:first-child {
      ul.details-list {
        li {
          display: flex;
          &:not(:last-child) {
            padding-bottom: 8px;
          }

          &:before {
            content: "";
            width: 8px;
            height: 8px;
            min-width: 8px;
            background-color: ${theme.secondaryColor};
            border-radius: 50%;
            margin-right: 16px;
            margin-top: 8px;
          }
        }
      }
    }
  }

  .details-list {
    li {
      font-size: 14px;
      line-height: 21px;
    }
  }
  .text-description {
    max-width: 1362px;
    padding: 176px 16px;
    margin: auto;
  }
  .apply-link {
    padding: 12px;
    background: ${theme.primaryColor};
    border-radius: 4px;
    color: ${theme.lightColor};
    margin-bottom: 64px;
    border: 0;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: ${theme.primaryHoverColor};
    }
  }
  .social-group {
    svg {
      &:hover {
        path {
          fill: ${theme.primaryColor} !important;
        }
      }
    }
  }
  @media screen and (max-width: ${breakpoints.screenMD}) {
    .job-container {
      display: block;
    }
    .html-content {
      max-width: 100%;
      margin-top: -60px;
      padding: 32px;
    }
    .more-container {
      margin-bottom: 64px;
    }
    .scrolled-container {
      padding: 32px 0 64px 0;
      position: static;
    }

    .more-details {
      padding-bottom: 48px;
    }
    .more-item {
      &:not(:first-child) {
        padding-top: 24px;
      }
    }
    .text-description {
      padding: 48px 0;
    }
    .apply-link {
      margin-bottom: 48px;
    }
  }
  @media screen and (max-width: ${breakpoints.screenS}) {
    .html-content {
      margin-top: -40px;
      min-height: auto;
    }
  }
`;

export default JobStyle;
