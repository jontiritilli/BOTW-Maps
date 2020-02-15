import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store";
import App from "./app";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
