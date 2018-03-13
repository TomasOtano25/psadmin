import React, { Component } from "react";
import AuthorApi from "../../api/authorApi";

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
    const createAuthorRow = author => {
      return (
        <tr key={author.id}>
          <td>
            <a href={`/#authors/${author.id}`}>{author.id}</a>
          </td>
          <td>
            {author.firstName} {author.lastName}
          </td>
        </tr>
      );
    };

    return (
      <div className="container">
        <h1>Authors</h1>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{this.state.authors.map(resp => createAuthorRow(resp))}</tbody>
        </table>
      </div>
    );
  }
}