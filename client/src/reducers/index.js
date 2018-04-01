import { combineReducers } from "redux";
import { reducer as reduxForm } from 'redux-form';
import authReducer from "./authReducer";
import dataEntryReducer from './dataEntryReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    admin: dataEntryReducer
});
