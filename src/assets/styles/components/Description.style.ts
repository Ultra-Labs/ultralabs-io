import styled from "styled-components";
import { DescriptionProps } from "components/Description";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const getVariant = (props: DescriptionProps) => {
  const mapping = {
    dark: {
      backgroundColor: theme.darkColor,
      color: theme.lightColor,
    },
    blue: {
      backgroundColor: theme.primaryColor,
      color: theme.lightColor,
    },
  };
  return mapping[props.variant];
};

export const DescriptionStyle = styled.section<any>`
  color: ${(props) => getVariant(props).color};
  background-color: ${(props) => getVariant(props).backgroundColor};

  .text-description {
    width: 100%;
    text-align: center;
    h2 {
      color: ${theme.lightColor};
      font-family: ${theme.secondaryFonts};
    }
    h3 {
      color: ${theme.lightColor};
      font-family: ${theme.primaryFonts};
    }
    a {
      background-color: ${theme.primaryColor};
      color: ${theme.lightColor};
      padding: 12px 32px;
      border-radius: 4px;
      display: inline-block;
      &:hover {
        background-color: ${theme.primaryHoverColor};
      }
    }
  }
`;
