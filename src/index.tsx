import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "@assets/globalStyles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);

reportWebVitals();
