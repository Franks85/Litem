import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions";
import _ from "lodash";
import formFields from "./formFields";

const adminFormReview = ({ onCancel, formValues, adminDataSubmit }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h4>Please confirm your entries</h4>
      <div style={{ padding: 30}}>{reviewFields}</div>
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
        Send Data
        <i className="material-icons right">done</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.dataEntry.values
  };
};

export default connect(mapStateToProps, actions)(adminFormReview);
