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
//Toastr
import "toastr/build/toastr.css";

import InitializeActions from "./actions/initializeActions";

InitializeActions.initApp();

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
