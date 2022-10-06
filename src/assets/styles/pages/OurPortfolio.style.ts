import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const OurPortfolioStyle = styled.div`
  .portfolio-block {
    h2 {
      font-family: ${theme.secondaryFonts};
      color: ${theme.secondaryColor};
      padding-bottom: 16px;
    }
    p {
      padding-bottom: 48px;
    }
  }
  .text-description {
    margin-top: 80px;
    padding: 160px 0;
    h2 {
      padding-bottom: 64px;
    }
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    .text-description {
      margin-top: 64px;
      padding: 116px 0;
      h2 {
        padding-bottom: 24px;
      }
    }
  }
`;

export default OurPortfolioStyle;
