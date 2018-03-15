import React, { Component } from "react";
import "./App.css";

import HeaderComponet from "./components/common/header";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderComponet />

          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
