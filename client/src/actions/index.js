import axios from 'axios';
import { FETCH_USER, ADMIN_DATA_SUBMIT } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/profile');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const adminDataSubmit = (values, history) => async dispatch => {
  const res = await axios.post('/api/dashboard', values);
  history.push('/dashboard');

  return { type: ADMIN_DATA_SUBMIT, payload: res.data}
}






