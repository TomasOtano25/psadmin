import React, { Component } from "react";
import TextInput from "../common/textInput";
import PropTypes from "prop-types";

export default class AuthorForm extends Component {
  render() {
    const { author, saveAuthor, onChange, errors } = this.props;
    return (
      <form onSubmit={saveAuthor}>
        <TextInput
          text="First Name"
          name="firstName"
          onChange={onChange}
          value={author.firstName}
          error={errors.firstName}
        />
        <TextInput
          text="Last Name"
          name="lastName"
          onChange={onChange}
          value={author.lastName}
          error={errors.lastName}
        />
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    );
  }
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  saveAuthor: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object
};
