import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .d-flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-column {
    flex-direction: column;
  }

  .align-items-center {
    align-items: center;
  }

  .justify-content-center {
    justify-content: center
  }

  .text-center {
    text-align: center;
  }

  .w-100 {
    width: 100%;
  }

  .h-100 {
    height: 100%;
  }

  .ml-auto {
    margin-left: auto;
  }

  .position-relative {
    position: relative;
  }

  img {
    max-width: 100%;
  }

  @keyframes fadeInMenu {
    0% {
      opacity: 0;
      transform: translateY(0.5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .menu {
    animation: fadeInMenu 0.2s ease-in-out;
  }
  
  input {
    &:focus-visible {
      outline: none;
    }
    &::placeholder {
      color: inherit;
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: inherit;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: inherit;
    }
  }
`;

export default GlobalStyles;
