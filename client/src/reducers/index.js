import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer'
import dataEntryReducer from './dataEntryReducer'
import { searchServiceReducer } from './searchServiceReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  admin: dataEntryReducer,
  service: searchServiceReducer
})
