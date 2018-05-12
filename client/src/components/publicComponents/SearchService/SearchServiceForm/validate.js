import formFields from './SSF3formFields'
import _ from 'lodash'

const validate = values => {
  const errors = {}
  // SSF3

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'Required'
    }
  })

  if (!values.phone) {
    errors.phone = 'Required'
  } else if (isNaN(Number(values.phone))) {
    errors.phone = 'Phone must be a number'
  }

  if (!values.postal) {
    errors.postal = 'Required'
  } else if (isNaN(Number(values.postal))) {
    errors.postal = 'Postal Code must be a number'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  //SSF1

  if (!values.itemSelected) {
    errors.itemSelected = 'Required'
  }

  if (!values.lossDate) {
    errors.lossDate = 'Required'
  } else {
    const selectDate = new Date(values.lossDate)
    let maxDate = new Date()
    if (selectDate > maxDate) {
      errors.lossDate = 'Loss Date must be in the past..'
    }
  }
  if (!values.lossPlace) {
    errors.lossPlace = 'Required'
  }

  return errors
}

export default validate
