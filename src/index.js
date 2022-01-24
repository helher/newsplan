import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Parse from "parse";

// Styles
import "./index.css";

Parse.initialize(
  "yLIQmZNi3deYCrVYD1bHBQ8RhsBGsZ7xyLXm0Agd",
  "ckDmenIaLlQnucqkjw97U4kFdNTambdxw4EwfMwc"
);

Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
