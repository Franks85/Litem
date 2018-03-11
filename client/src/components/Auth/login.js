import React, { Component } from "react";
import { reduxForm, Field, SubmissionError } from "redux-form";
import AuthField from "./authField";
import axios from "axios";
import {Redirect} from 'react-router-dom'

class Login extends Component {

  state = {
    redirectToDashboard: false
  }

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

  submit = values => {
    console.log(values)
    let self = this;
    return new Promise((resolve, reject) => {
      axios.post("/api/login", values).then(function(response) {
        if (response.data.message) {
          const errObj = new SubmissionError({ _error: response.data.message });
          reject(errObj);
        }else{
        self.setState({redirectToDashboard: true})
        }
      });
    });
    

  };

  render() {
    if(this.state.redirectToDashboard) {
      return (
        <Redirect to='/dashboard' />
      )
    }
    const { error, handleSubmit, submitting } = this.props;
    return (
      <div className="row">
        <h2 className="center-align pink-text">LOGIN</h2>
        <div className="col offset-s3 s6">
          <form onSubmit={handleSubmit(this.submit)}>
            <div className="red-text" style={{padding: 20, fontSize: 18}}> 
              {error && <strong>{error}</strong>}
            </div>
            {this.renderField()}
            <button
              type="submit"
              disabled={submitting}
              className="teal btn-flat white-text"
            >
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
  form: "authLoginForm"
})(Login);