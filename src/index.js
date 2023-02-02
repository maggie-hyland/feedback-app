import React from "react";
import ReactDOM from "react-dom/client";
//The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.
import "./style.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
