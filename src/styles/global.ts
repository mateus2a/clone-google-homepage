import { createGlobalStyle }  from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;
    --border: #E3E3E3;
    --button: #F8F8F8;
    --bottom: #F2F2F2;
    --text-dark: #70757a;
    --text-middle-dark: #7B7B7B;
    --text-link: #1A0DBD;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) { 
      font-size: 14px;
    }
  }
  body {
    background: var(--white);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--text-dark);
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;