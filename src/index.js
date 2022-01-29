import React from "react";
import { render } from "react-dom";

import { AppStateProvider } from "app/contexts/AppContext";
import App from "app/entry/App";

render(
  <AppStateProvider>
    <App />
  </AppStateProvider>,
  document.getElementById("app")
);
