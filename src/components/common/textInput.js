import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextInput extends Component {
  render() {
    let wrapperClass = "form-control";
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += ` is-invalid`;
    }
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.text}</label>
        <input
          className={wrapperClass}
          type="text"
          name={this.props.name}
          ref={this.props.name}
          placeholder={this.props.text}
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <div className="invalid-feedback">{this.props.error}</div>
        <br />
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};
