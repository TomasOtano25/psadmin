import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js"; //imn
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// Ruta #
const render = () => {
  let route = window.location.hash.substr(1);
  ReactDOM.render(<App route={route} />, document.getElementById("root"));
};

window.addEventListener("hashchange", render);
render();

registerServiceWorker();
