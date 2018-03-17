import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AuthorList extends Component {
  render() {
    const { authors } = this.props;
    const createAuthorRow = author => {
      const id = author.id;
      return (
        <tr key={author.id}>
          <td>
            <Link to={`/author/${id}`}>{author.id}</Link>
          </td>
          <td>
            {author.firstName} {author.lastName}
          </td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{authors.map(resp => createAuthorRow(resp))}</tbody>
        </table>
      </div>
    );
  }
}
