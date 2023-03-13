import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./features";
import "./stylesheets/index.scss";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "./common/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <ScrollToTop /> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
