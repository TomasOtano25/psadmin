import React, { Component } from "react";
import AuthorApi from "../../api/authorApi";

import AuthorList from "./authorList";

export default class AuthorPage extends Component {
  state = {
    authors: []
  };

  componentDidMount() {
    // if (!this.isMounted) {
    this.setState({
      authors: AuthorApi.getAllAuthors()
    });
    // }
  }

  render() {
    const { authors } = this.state;

    return (
      <div className="container">
        <h1>Authors</h1>
        <AuthorList authors={authors} />
      </div>
    );
  }
}
