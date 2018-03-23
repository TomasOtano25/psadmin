import React, { Component } from "react";
import AuthorForm from "./authorForm";
// import AuthorApi from "../../api/authorApi";
import AuthorActions from "../../actions/authorActions";
import AuthorStore from "../../stores/authorStore";
import { /*withRouter,*/ Redirect } from "react-router-dom";
import Toastr from "toastr/build/toastr.min";

export default class ManageAuthorPage extends Component {
  static initialState = () => ({
    author: {
      id: "",
      firstName: "",
      lastName: ""
    },
    errors: {},
    dirty: false,
    toAuthorsPage: false
  });

  state = ManageAuthorPage.initialState();

  setAuthorState = event => {
    let field = event.target.name;
    let value = event.target.value;
    this.state.author[field] = value;
    this.setState({
      author: this.state.author,
      dirty: false
    });

    if (
      this.state.author.firstName.length > 0 ||
      this.state.author.lastName.length > 0
    ) {
      this.setState({
        dirty: true
      });
    }
  };

  authorIsFormValid = () => {
    let authorIsValid = true;
    let errors = {};
    if (this.state.author.firstName.length < 3) {
      errors.firstName = "First name must be at least 3 characters.";
      authorIsValid = false;
    }
    if (this.state.author.lastName.length < 3) {
      errors.lastName = "Last name must be at least 3 characters.";
      authorIsValid = false;
    }
    this.setState({
      errors: errors
    });
    return authorIsValid;
  };

  saveAuthor = event => {
    event.preventDefault();

    if (!this.authorIsFormValid()) {
      return;
    }
    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author);
    } else {
      AuthorActions.createAuthor(this.state.author);
    }

    this.setState({
      dirty: false
    });
    this.setState(ManageAuthorPage.initialState());
    Toastr.options.positionClass = "toast-bottom-right";
    Toastr.success("Author saved.");
    // Historial
    //this.props.history.push("/authors");
    this.setState({
      toAuthorsPage: true
    });
  };

  componentWillMount = () => {
    const authorId = this.props.match.params.id;
    if (authorId) {
      this.setState({
        author: AuthorStore.getAuthorById(authorId)
      });
    }
  };

  render() {
    if (this.state.toAuthorsPage) {
      return <Redirect to="/authors" />;
    }

    const { author, errors } = this.state;
    return (
      <div className="container">
        <h1>Manage Author</h1>
        <AuthorForm
          saveAuthor={this.saveAuthor}
          author={author}
          onChange={this.setAuthorState}
          errors={errors}
        />
      </div>
    );
  }
}

//export default withRouter(ManageAuthorPage);
