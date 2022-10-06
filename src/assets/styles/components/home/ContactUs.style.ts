import breakpoints from "constants/breakpoints";
import styled from "styled-components";

const ContactUsStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: ${breakpoints.screenMD}) {
    grid-template-columns: unset;
  }
`;

export default ContactUsStyle;
