import React from "react";
import { render } from "react-dom";

import { AppStateProvider } from "app/contexts/AppContext";
import App from "app/entry/App";
import { GlobalStyle } from "app/theme";

render(
  <AppStateProvider>
    <GlobalStyle />
    <App />
  </AppStateProvider>,
  document.getElementById("app")
);
