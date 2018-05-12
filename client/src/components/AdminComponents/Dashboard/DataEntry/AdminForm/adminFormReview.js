import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "../../../../../actions";
import _ from "lodash";
import formFields from "./formFields";

class adminFormReview extends Component {
  state = {
    submitMessage: ""
  };

  componentWillUpdate(nextProps) {
    if (nextProps.success !== this.props.success) {
      this.setState({
        submitMessage: nextProps.clientMsg
      });
    }
    if (nextProps.fail === true) {
      this.props.onCancel();
    }
  }

  render() {
    const { onCancel, formValues, adminDataSubmit } = this.props;

    const reviewFields = _.map(formFields, ({ label, name }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });

    const itemField = (
      <div>
        <label>Selected Item</label>
        <div>{formValues.itemSelected}</div>
      </div>
    );

    const successMsg = (
      <div className="row">
        <div className="col s12 m8">
          <div className="alert alert-success fade show">
            {this.state.submitMessage}
          </div>
          <p>
            <Link to="/dashboard">ADD NEW ITEM</Link>
          </p>
        </div>
      </div>
    );

    return (
      <div>
        <h4>Please confirm your entries</h4>
        {this.props.success ? successMsg : null}
        <div style={{ padding: 30 }}>
          {itemField}
          {reviewFields}
        </div>
        <div style={{paddingBottom: '50px'}}>
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          <i className="material-icons right">cancel</i>
          Back
        </button>
        <button
          className="green btn-flat right white-text"
          onClick={() => adminDataSubmit(formValues)}
        >
          Confirm
          <i className="material-icons right">done</i>
        </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: state.form.dataEntry.values,
    clientMsg: state.admin.clientMsg,
    success: state.admin.itemSaved,
    fail: state.admin.fail
  };
};

export default connect(mapStateToProps, actions)(withRouter(adminFormReview));
