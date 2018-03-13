import React, { Component } from "react";
import "./App.css";

import HomePage from "./components/homePage";
import AboutPage from "./components/about/aboutPage";
import HeaderComponet from "./components/common/header";
import AuthorPage from "./components/authors/authorPage";

class App extends Component {
  render() {
    let Child;
    switch (this.props.route) {
      case "about":
        Child = AboutPage;
        break;
      case "authors":
        Child = AuthorPage;
        break;
      default:
        Child = HomePage;
        break;
    }
    return (
      <div>
        <HeaderComponet />
        <Child />
      </div>
    );
  }
}

export default App;
