import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    word-wrap: break-word;
  }

  html {
    min-height: 100%;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  ul, menu, dir {
    padding-left: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *:focus,
  *:active {
    outline: 0 !important;
  }

  ul, li {
    list-style: none;
  }
`;

export default ResetStyles;
