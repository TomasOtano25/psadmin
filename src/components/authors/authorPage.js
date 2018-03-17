import React, { Component } from "react";
import AuthorApi from "../../api/authorApi";
import AuthorList from "../authors/authorList";
import { Link } from "react-router-dom";

export default class AuthorPage extends Component {
  state = {
    authors: []
  };

  componentWillMount() {
    this.setState({
      authors: AuthorApi.getAllAuthors()
    });
  }

  render() {
    const { authors } = this.state;

    return (
      <div className="container">
        <h1>Authors</h1>
        <Link to="/author" className="btn btn-secondary mb-2">
          Add author
        </Link>

        <AuthorList authors={authors} />
      </div>
    );
  }
}
