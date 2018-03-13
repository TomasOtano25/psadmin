import React, { Component } from "react";

export default class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>About</h1>
        <p>This aplication uses the following technologies:</p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    );
  }
}
