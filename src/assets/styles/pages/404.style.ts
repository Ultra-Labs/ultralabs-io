import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const NotFoundStyle = styled.div`
  background-color: #282828;
  padding-top: 108px;
  padding-bottom: 108px;
  h1 {
    white-space: nowrap;
    color: ${theme.lightColor};
    padding-top: 106px;
  }
  p {
    color: ${theme.lightColor};
    padding: 24px 0 75px;
  }
  .buttonLink {
    font-size: 24px;
    padding: 18px 24px;
    border-radius: 4px;
    display: inline-block;
    margin-right: 12px;
    &:first-child {
      background-color: ${theme.primaryColor};
      color: ${theme.lightColor};
      &:hover {
        background-color: ${theme.primaryHoverColor};
      }
    }
    &:last-child {
      background-color: ${theme.lightColor};
      color: ${theme.secondaryColor};
      margin-left: 12px;
      margin-right: 0;
      &:hover {
        background-color: ${theme.secondaryColor};
        color: ${theme.lightColor};
      }
    }
  }
  @media screen and (max-width: ${breakpoints.screenS}) {
    padding-top: 78px;
    padding-bottom: 136px;
    h1 {
      padding-top: 6px;
      padding-bottom: 8px;
    }
    p {
      padding: 24px 0 62px;
    }
    .buttonLink {
      font-size: 16px;
      padding: 10px 16px;
      margin-right: 8px;
      &:last-child {
        margin-left: 8px;
        margin-right: 0;
      }
    }
  }
  @media screen and (max-width: ${breakpoints.screenXS}) {
    .buttonLink {
      padding: 6px 8px;
      margin-right: 6px;
      &:last-child {
        margin-left: 6px;
        margin-right: 0;
      }
    }
  }
  @media screen and (max-width: ${breakpoints.screenXXS}) {
    .buttonLink {
      font-size: 14px;
    }
  }
`;

export default NotFoundStyle;
