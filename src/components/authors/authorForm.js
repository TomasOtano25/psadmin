import React, { Component } from "react";
import TextInput from "../common/textInput";

export default class AuthorForm extends Component {
  render() {
    const { author, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <TextInput
          text="First Name"
          name="firstName"
          onChange={this.props.onChange}
          value={author.firtName}
        />
        <TextInput
          text="Last Name"
          name="lastName"
          onChange={this.props.onChange}
          value={author.lastName}
        />
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    );
  }
}
