import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import AuthField from "./authField";
import axios from "axios";

class Signup extends Component {
  renderField() {
    return (
      <div>
        <Field
          type="email"
          name="email"
          label="Your Email"
          component={AuthField}
        />
        <Field
          type="password"
          name="password"
          label="Password"
          component={AuthField}
        />
      </div>
    );
  }

  handleFormSubmit = data => {
    console.log(data)
    axios.post("/api/register", data);
  };

  render() {
    return (
      <div className="row">
        <h2 className="center-align pink-text">SIGNUP</h2>
        <div className="col offset-s3 s6">
          <form
            onSubmit={this.props.handleSubmit(values =>
              this.handleFormSubmit(values)
            )}
          >
            {this.renderField()}
            <button type="submit" className="teal btn-flat white-text">
              Submit
              <i className="material-icons right">done</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "You must provide an email address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "You must provide a password";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "authForm"
})(Signup);
