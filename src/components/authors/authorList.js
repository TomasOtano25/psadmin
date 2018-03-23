import React, { Component } from "react";
import { Link } from "react-router-dom";
import Toastr from "toastr/build/toastr.min";
import AuthorActions from "../../actions/authorActions";

export default class AuthorList extends Component {
  deleteAuthor(id) {
    AuthorActions.deleteAuthor(id);
    Toastr.options.positionClass = "toast-bottom-right";
    Toastr.info("Author Deleted.");
  }

  render() {
    const { authors } = this.props;
    const createAuthorRow = author => {
      const id = author.id;
      return (
        <tr key={author.id}>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteAuthor(author.id)}
            >
              Delete
            </button>
          </td>
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
              <th />
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
