import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Col, Row } from "react-materialize";
import { inputField } from "../../../../utils/form/inputsField";
import formFields from "./SSF3formFields";
import _ from "lodash";
import validate from "./validate";

class SSF3 extends Component {
  submit = values => {
    console.log(values);
  };

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

  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    return (
      <div>
        <Row>
          <Col s={12} m={6} className="offset-m3">
            <h4 className="pink-text">LOSS BY</h4>
            <form onSubmit={handleSubmit(this.submit)}>
              {this.renderField()}
              <button
                type="button"
                className="previous teal btn-flat white-text"
                onClick={previousPage}
              >
                Previous
              </button>
              <button
                type="submit"
                disabled={pristine || submitting}
                className="teal btn-flat white-text right"
              >
                Submit
                <i className="material-icons right">done</i>
              </button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default reduxForm({
  form: "searchService", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SSF3);
