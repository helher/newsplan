import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Parse from "parse";

// Styles
import "./index.css";

Parse.initialize(
  `${process.env.REACT_APP_APPLICATION_ID}`,
  `${process.env.REACT_APP_JAVASCRIPT_KEY}`,
)

Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
