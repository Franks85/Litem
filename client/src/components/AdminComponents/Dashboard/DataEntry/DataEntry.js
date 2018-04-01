import React, { Component } from "react";
import AdminForm from "./AdminForm/AdminForm";
import AdminFormReview from "./AdminForm/adminFormReview";
import { reduxForm } from "redux-form";

class DataEntry extends Component {
  state = {
    showFormReview: false
  };

  render() {
    return (
      <div>
        {this.state.showFormReview ? (
          <AdminFormReview
            onCancel={() => this.setState({ showFormReview: false })}
          />
        ) : (
          <AdminForm
            onFormSubmit={() => this.setState({ showFormReview: true })}
          />
        )}
      </div>
    );
  }
}


export default reduxForm({
  form: "dataEntry"
})(DataEntry);
