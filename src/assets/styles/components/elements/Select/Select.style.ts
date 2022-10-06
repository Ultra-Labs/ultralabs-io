import styled from "styled-components";
import { theme } from "constants/variables";

export const Label = styled.label`
  left: 0;
  pointer-events: none;
  position: absolute;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  color: ${theme.primaryColor};
  transform: translateY(${(props) => (props.isFloating ? `-12px` : `9px`)});
  font-size: ${(props) => (props.isFloating ? `12px` : `16px`)};
`;
