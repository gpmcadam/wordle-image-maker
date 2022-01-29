import _ from "lodash";
import { createGlobalStyle } from "styled-components";

import day from "./day";
import night from "./night";

export const DEFAULT_THEME = "day";

const base = {
  fontFamily: "'Clear Sans', 'Helvetica Neue', Arial, sans-serif",
  fontSize: "16px",
  headerHeight: "50px",
  keyboardHeight: "200px",
  gameMaxWidth: "500px",
};

const themes = {
  day,
  night,
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize};
    color: ${({ theme }) => theme.colorTone1};
  }

  svg {
    fill: ${({ theme }) => theme.colorTone1};
    color: ${({ theme }) => theme.colorTone1};
  }

  a {
    &:link {
      color: ${({ theme }) => theme.blue}
    }

    &:visited {
      color: ${({ theme }) => theme.colorTone2}
    }

    &:active {
      color: ${({ theme }) => theme.orange}
    }

  }

  h1, html, body, #app { margin: 0; padding: 0; }

  html, body, #app {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colorBackground};
    height: 100%;
    overflow-y: hidden;
  }
`;

export function getTheme(themeName) {
  const theme = _.get(themes, themeName, themes[DEFAULT_THEME]);
  return {
    ...base,
    ...theme,
  };
}

export { ThemeProvider } from "styled-components";
