import React from "react";
import { Field, reduxForm } from "redux-form";
import { Col, Row } from "react-materialize";
import { inputField } from "../../../../utils/form/inputsField";
import { renderDropdownList } from "../../../../utils/form/dropdownList";
import "react-widgets/dist/css/react-widgets.css";
import validate from "./validate";
import items from "./selectItemsList";

const SSF1 = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <Row>
        <Col s={12} m={6} className="offset-m3">
          <form onSubmit={handleSubmit}>
            <Field
              name="lossDate"
              label="Date of loss *"
              type="date"
              component={inputField}
            />
            <Field
              name="lossPlace"
              label="Place of loss *"
              type="text"
              component={inputField}
            />
            <label>Object Type *</label>
            <Field
              name="itemSelected"
              component={renderDropdownList}
              data={items}
              placeholder="Select a item.."
            />

            <button type="submit" className="teal btn-flat white-text next">
              Next
              <i className="material-icons right">done</i>
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default reduxForm({
  form: "searchService", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SSF1);
