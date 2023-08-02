import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

// Mount the App component inside the Router and render it into the "root" element in the DOM
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
