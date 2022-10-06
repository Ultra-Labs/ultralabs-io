import breakpoints from "constants/breakpoints";
import styled from "styled-components";

const CareersStyle = styled.div`
  .text-description {
    padding: 176px 0;
    max-width: 1352px;
    margin: auto;
  }
  @media screen and (max-width: ${breakpoints.screenMD}) {
    .text-description {
      padding: 48px 0;
    }
  }
`;

export default CareersStyle;
