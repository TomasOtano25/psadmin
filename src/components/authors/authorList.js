import React, { Component } from "react";

import PropTypes from "prop-types";

export default class AuthorList extends Component {
  static propTypes = {
    authors: PropTypes.array.isRequired
  };

  render() {
    const { authors } = this.props;

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
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{authors.map(resp => createAuthorRow(resp))}</tbody>
      </table>
    );
  }
}

/*AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};*/
