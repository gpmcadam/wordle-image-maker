import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
  }

  h1, html, body, #app { margin: 0; padding: 0; }

  html, body, #app {
    height: 100%;
  }
`;
