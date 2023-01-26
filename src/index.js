import React from "react";
import ReactDom from "react-dom";
//The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.
import "./style.css";
import App from "./App";

ReactDom.render(
  <React.StrictMode>
    {" "}
    {/*StrictMode is a tool for highlighting potential problems in an application. StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.*/}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
