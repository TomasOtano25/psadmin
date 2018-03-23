import React, { Component } from "react";
import AuthorStore from "../../stores/authorStore";
import AuthorList from "../authors/authorList";
import { Link } from "react-router-dom";

export default class AuthorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: AuthorStore.getAllAuthors()
    };
  }

  componentWillMount() {
    AuthorStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    AuthorStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    // console.log("onChange");
    // debugger;
    this.setState({
      authors: AuthorStore.getAllAuthors()
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
