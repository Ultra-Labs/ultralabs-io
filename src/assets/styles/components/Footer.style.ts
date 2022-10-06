import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";
import { InputProps } from "components/elements/Input/Input";

const FooterStyle = styled.footer<InputProps>`
  background: ${theme.primaryColor};
  display: flex;
  justify-content: center;
  padding-top: 48px;
  padding-bottom: 32px;

  .footer-logo {
    width: 217px;
  }

  .main_menu {
    padding-top: 44px;
    border-bottom: 1px solid ${theme.lightColor};

    .menu_list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-bottom: 64px;

      .menu_item {
        color: ${theme.lightColor};

        a {
          color: ${theme.lightColor};

          & svg {
            margin-right: 8px;
          }
        }

        .submenu_list {
          .submenu_item {
            margin-top: 24px;

            .title {
              display: inline-block;
              margin-bottom: 24px;
            }
          }
        }
        .connection {
          color: ${theme.lightColor};
          pointer-events: none;
          & svg {
            margin-right: 8px;
          }
        }
      }
    }
  }

  .copyright {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: ${theme.lightColor};
    padding-top: 24px;

    .shared_block {
      margin-left: auto;

      ul {
        li {
          &:not(:first-child) {
            margin-left: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    padding-bottom: 24px;

    .main_menu {
      .menu_list {
        padding-bottom: 48px;
        justify-content: unset;
        .menu_item {
          &:nth-child(2) {
            margin-left: auto;
          }
          &:last-child {
            padding-top: 48px;
          }
          .connection {
            pointer-events: unset;
          }
        }
      }
    }

    .copyright {
      .shared_block {
        margin-left: auto;

        ul {
          li {
            &:not(:first-child) {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: ${breakpoints.screenS}) {
    .footer-logo {
      width: 110px;
    }
    .main_menu {
      .menu_list {
        .menu_item {
          &:nth-child(2) {
            margin-left: unset;
          }
          &:nth-child(2) {
            width: 100%;
            padding-top: 48px;
          }
        }
      }
    }

    .copyright {
      .shared_block {
        margin-left: unset;
        margin-top: 24px;
        width: 100%;
      }
    }
  }
`;

export default FooterStyle;
