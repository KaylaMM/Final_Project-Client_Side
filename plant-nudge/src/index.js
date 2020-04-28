import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/index";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
