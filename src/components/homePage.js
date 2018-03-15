import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>Pluralsight Adminitration</h1>
          <p>React, React-Router and Flux for ultra-responsive web apps.</p>
          <Link to="/about" className="btn btn-lg btn-primary">
            Learn more
          </Link>
        </div>
      </div>
    );
  }
}
