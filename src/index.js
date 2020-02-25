import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import testData from "./testData.json";

ReactDOM.render(
  <App contests={testData.contests} />,
  document.getElementById("root")
);
