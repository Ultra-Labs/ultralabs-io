import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const HeaderStyle = styled.header`
  background: #000;
  height: 60px;
  padding: 10px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  align-items: center;

  .logo {
    width: 122px;
  }

  .show-mobile {
    display: none;
    width: 48px;
    height: 48px;
    position: absolute;
    right: 40px;
    cursor: pointer;
    background-color: unset;
    border: none;
  }

  .main-menu {
    margin-left: auto;

    .menu {
      margin: 0;
      display: flex;
      padding: 0;

      li {
        &:not(:first-child) {
          margin-left: 32px;
        }

        a {
          color: white;
          font-weight: normal;
          position: relative;

          &:hover {
            color: ${theme.secondaryColor};
          }

          &.active-link {
            width: 100%;
            color: ${theme.secondaryColor};
            transition: all ease-in-out 0.2s;
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    .show-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-menu {
      width: 100%;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background: rgba(23, 23, 23, 0.8);
      transition: 0.3s;
      visibility: hidden;
      opacity: 0;
      height: 0;

      &.opened {
        visibility: visible;
        opacity: 1;
        overflow: auto;
        height: calc(100vh - 60px);
      }

      .menu {
        flex-direction: column;
        align-items: center;

        li {
          width: 80%;
          position: relative;
          text-align: center;
          margin-top: 24px;

          &:not(:first-child) {
            margin-left: 0;
          }

          a {
            font-size: 32px;
            line-height: 48px;
            display: inline-block;

            &.active-link {
              &:after {
                content: "";
                position: absolute;
                bottom: -14px;
                left: 0;
                width: 100%;
                border-bottom: 1px solid ${theme.secondaryColor};
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: ${breakpoints.screenSM}) {
    .show-mobile {
      right: 16px;
    }
  }
`;

export default HeaderStyle;
