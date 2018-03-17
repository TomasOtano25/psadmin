import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
  };

  render() {
    let wrapperClass = "form-group";
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += ` has-error`;
    }
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.text}</label>
        <input
          className="form-control"
          type="text"
          name={this.props.name}
          ref={this.props.name}
          placeholder={this.props.text}
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <div className="input">{this.props.error}</div>
        <br />
      </div>
    );
  }
}
