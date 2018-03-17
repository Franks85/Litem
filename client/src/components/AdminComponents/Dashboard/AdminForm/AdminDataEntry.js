import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { inputField } from "../../../../utils/form/inputsField";
import formFields from './formFields'

class AdminDataEntry extends Component {
  renderField() {
    return _.map(formFields, ({ type, label, name }) => {
      return (
        <Field
          key={name}
          type={type}
          label={label}
          name={name}
          component={inputField}
        />
      );
    });
  }

  submit = values => {
    console.log(values);
    this.props.onFormSubmit();
  };

  render() {
    const { error, handleSubmit, submitting } = this.props;
    return (
      <div className="center-align">
        <div className="row">
          <h2
            className="center-align pink-text"
            style={{ display: "inline-flex", verticalAlign: "middle" }}
          >
            <i className="material-icons medium">account_circle</i>Admin Data Entry
          </h2>
          <div className="col offset-s3 s6">
            <form onSubmit={handleSubmit(this.submit)}>
              <div className="red-text" style={{ padding: 20, fontSize: 18 }}>
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
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(isNaN(Number(values.refCode))) {
    errors.refCode = 'RefCode must be a number'
  }

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  destroyOnUnmount: false,
  form: "dataEntry"
})(AdminDataEntry);
