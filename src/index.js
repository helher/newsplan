import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Parse from "parse";

// Styles
import "./index.css";

Parse.initialize(
  "prgwSUltp9nUB75hqh7iW21kwd4xqVfhzIsTIzZz",
  "MdOxEqwSdGUH7WdyANx0klSOb1U07dUyHf0A1Qq2"
);

Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
