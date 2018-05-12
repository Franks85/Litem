import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Col, Row } from 'react-materialize'
import { inputField } from '../../../../utils/form/inputsField'
import 'react-widgets/dist/css/react-widgets.css'
import { color } from './selectColorsList'
import { renderDropdownList } from '../../../../utils/form/dropdownList'
import validate from './validate'

const SSF2 = props => {
  const { handleSubmit, previousPage } = props
  return (
    <div>
      <Row>
        <Col s={12} m={6} className="offset-m3">
          <p className="pink-text">
            To facilitate the discovery of the object, fill in the following
            descriptive fields
          </p>
          <form onSubmit={handleSubmit}>
            <Field
              name="material"
              label="Material"
              type="text"
              component={inputField}
            />
            <Field
              name="brand"
              label="Brand"
              type="text"
              component={inputField}
            />
            <label>Color</label>
            <Field
              name="itemColor"
              component={renderDropdownList}
              data={color}
              placeholder="Select a color.."
            />

            <label>Extended description</label>
            <Field
              name="description"
              component="textarea"
              placeholder="Insert a full description.."
              style={{
                marginBottom: '30px',
                paddingTop: '8px',
                height: '150px'
              }}
            />
            <button
              type="button"
              className="previous teal btn-flat white-text"
              onClick={previousPage}
            >
              Previous
            </button>
            <button type="submit" className="teal btn-flat white-text right">
              Next
              <i className="material-icons right">done</i>
            </button>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default reduxForm({
  form: 'searchService', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SSF2)
