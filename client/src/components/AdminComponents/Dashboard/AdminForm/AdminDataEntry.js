import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { inputField } from "../../../../utils/form/inputsField";

const formField = [
  { type: "date", label: "Advice date", name: "adviceDate" },
  { type: "text", label: "Ref Code", name: "refCode" },
  { type: "text", label: "Item Description", name: "description" },
  { type: "date", label: "Pubblication Date", name: "pubDate" }
];

class AdminDataEntry extends Component {
  renderField() {
    return _.map(formField, ({ type, label, name }) => {
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
  };

  render() {
    const { error, handleSubmit, submitting } = this.props;
    return (
      <div className="row">
        <h2 className="center-align pink-text"><i class="material-icons">account_circle</i>Admin Data Entry</h2>
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
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formField, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "dataEntry"
})(AdminDataEntry);
