import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { Col, Row, Preloader } from "react-materialize";
import { inputField } from "../../../../utils/form/inputsField";
import formFields from "./SSF3formFields";
import _ from "lodash";
import validate from "./validate";
import { serviceSubmit } from "../../../../actions";
import { Redirect, withRouter, Link } from "react-router-dom";

class SSF3 extends Component {
  state = {
    successMsg: ""
  };
  submit = values => {
    return this.props.serviceSubmit(values).then(res => {
      if (res.data.error) {
        throw new SubmissionError({ _error: res.data.error });
      } else if (res.data.success) {
        this.setState({ successMsg: res.data.success });
      }
    });
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
    if (this.state.redirectToSuccessPage) {
      return <Redirect to="/" />;
    }
    const {
      handleSubmit,
      pristine,
      previousPage,
      submitting,
      error
    } = this.props;

    const spinner = this.props.loading ? (
      <Row>
        <Col s={4}>
          <Preloader flashing />
        </Col>
      </Row>
    ) : null;

    const successMsg = (
      <div style={{ marginTop: "30px" }}>
        <div className="row center">
          <div className="col s12">
            <div className="alert alert-success fade show">
              {this.state.successMsg}
            </div>
            <p>
              <Link to="/">Back Home</Link>
            </p>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <Row>
          <Col s={12} m={6} className="offset-m3">
            <h5 className="pink-text center">LOSS BY</h5>
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

              {spinner}
            </form>
            {this.state.successMsg ? successMsg : null}

            <div style={{ marginTop: "30px" }}>
              {error && (
                <div className="row center">
                  <div className="col s12">
                    <div className="alert alert-danger fade show">
                      <strong>{error}</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.service.loading
  };
};

const ssf3 = connect(mapStateToProps, { serviceSubmit })(withRouter(SSF3));

export default reduxForm({
  form: "searchService", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ssf3);
