import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const PortfolioListStyle = styled.section`
  margin-bottom: 160px;
  margin-top: 100px;
  /* .category-list {
    display: flex;
    margin-bottom: 48px;
    .category-item {
      text-transform: capitalize;
      cursor: pointer;
      &:not(:last-child) {
        padding-right: 160px;
      }
      &.active {
        color: ${theme.secondaryColor};
      }
    }
  } */
  .portfolio-list {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding-top: 60px;
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    margin-top: 64px;
    margin-bottom: 64px;
    /* .category-list {
      margin-bottom: 32px;
      .category-item {
        &:not(:last-child) {
          padding-right: 48px;
        }
      }
    } */
  }

  @media screen and (max-width: ${breakpoints.screenS}) {
    /* .category-list {
      display: flex;
      margin-bottom: 48px;
      .category-item {
        &.h3 {
          font-size: 16px;
        }
      }
    } */
    .portfolio-list {
      padding-top: 0;
    }
  }
`;

export default PortfolioListStyle;
