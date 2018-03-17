import React, { Component } from "react";
import AuthorForm from "./authorForm";
import AuthorApi from "../../api/authorApi";

export default class ManageAuthorPage extends Component {
  static author = () => ({
    author: {
      id: "",
      firstName: "",
      lastName: ""
    }
  });

  state = ManageAuthorPage.author();

  setAuthorState = event => {
    let field = event.target.name;
    let value = event.target.value;
    this.state.author[field] = value;
    this.setState({
      author: this.state.author
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    this.setState(ManageAuthorPage.author());
  };

  render() {
    const { author } = this.state;
    return (
      <div className="container">
        <h1>Manage Author</h1>
        <AuthorForm
          handleSubmit={this.handleSubmit}
          author={author}
          onChange={this.setAuthorState}
        />
      </div>
    );
  }
}
