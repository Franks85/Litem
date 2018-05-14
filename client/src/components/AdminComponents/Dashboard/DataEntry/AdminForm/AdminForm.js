import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { inputField } from '../../../../../utils/form/inputsField'
import formFields from './formFields'
import '../../../../../UI/css/alert.css'
import { renderDropdownList } from '../../../../../utils/form/dropdownList'
import items from '../../../../publicComponents/SearchService/SearchServiceForm/selectItemsList'

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
      )
    })
  }

  submit = () => {
    this.props.onFormSubmit()
  };

  render() {
    const errorMsg = (
      <div className="row">
        <div className="col s12">
          <div className="alert alert-danger fade show">
            {this.props.clientMsg}
          </div>
        </div>
      </div>
    )
    const { error, handleSubmit, submitting } = this.props

    return (
      <div className="center-align">
        <div className="row" style={{ marginBottom: 50 }}>
          <h2
            className="center-align pink-text"
            style={{ display: 'inline-flex', verticalAlign: 'middle' }}
          >
            <i className="material-icons medium">account_circle</i>Admin Data
            Entry
          </h2>

          <div className="col offset-m3 m6 offset-s2 s8">
            {this.props.clientMsg ? errorMsg : null}
            <form onSubmit={handleSubmit(this.submit)}>
              <div className="red-text" style={{ padding: 20, fontSize: 18 }}>
                {error && <strong>{error}</strong>}
              </div>
              <div>
                <label>Object Type *</label>
                <Field
                  name="itemSelected"
                  component={renderDropdownList}
                  data={items}
                  placeholder="Select a item.."
                />
              </div>
              {this.renderField()}
              <Link to="/dashboard" className="red btn-flat white-text left">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={submitting}
                className="teal btn-flat white-text right"
              >
                Next
                <i className="material-icons right">done</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  if (isNaN(Number(values.refCode))) {
    errors.refCode = 'RefCode must be a number'
  } else if (values.refCode.length !== 5) {
    errors.refCode = 'RefCode is a five-digit number'
  }

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value'
    }
  })

  if(!values.itemSelected) {
    errors.itemSelected = 'Required'
  }

  return errors
}

const mapStateToProps = state => {
  return {
    clientMsg: state.admin.clientMsg
  }
}

const admin = connect(mapStateToProps)(AdminDataEntry)

export default reduxForm({
  validate,
  destroyOnUnmount: false,
  form: 'dataEntry'
})(admin)
