import axios from 'axios';
import { FETCH_USER, ADMIN_DATA_SUBMIT } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/profile');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const adminDataSubmit = (values) => {
  return { type: ADMIN_DATA_SUBMIT}
}






