import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Page not found</h1>
        <p>Whoops! Sorry, there is nothing to see here</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Back to Home
        </Link>
      </div>
    );
  }
}
