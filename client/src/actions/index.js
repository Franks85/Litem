import axios from 'axios'
import { makeActionCreator } from 'redux-toolbelt'
import { makeThunkAsyncActionCreator } from 'redux-toolbelt-thunk'
import {
  FETCH_USER,
  LOADING_CONTENT,
  AUTH_FAIL,
  AUTH_SUCCESS,
  ADMIN_SUBMIT_SUCCESS,
  ADMIN_SUBMIT_FAILED,
  ADMIN_FETCH_ITEM,
  ITEMS_FETCH_FAIL,
  ITEMS_FETCH_SUCCESS,
  ADMIN_ITEM_SEARCH,
  ADMIN_ITEM_DELETE
} from './types'

// auth
export const fetchUser = () => async dispatch => {
  dispatch({ type: LOADING_CONTENT })
  const res = await axios.get('/api/profile')
  if (!res.data) {
    return dispatch({ type: AUTH_FAIL })
  }
  dispatch(authenticate())
  dispatch({ type: FETCH_USER, payload: res.data })
}

/* export const authenticate = () => dispatch => {
  dispatch({type: AUTH_SUCCESS})
} */

export const authenticate = makeActionCreator(AUTH_SUCCESS)

// admin
export const adminDataSubmit = values => dispatch => {
  axios
    .post('/api/dashboard', values)
    .then(res => {
      if (res.data.error) {
        return dispatch({ type: ADMIN_SUBMIT_FAILED, payload: res.data.error })
      }
      dispatch({ type: ADMIN_SUBMIT_SUCCESS, payload: res.data.success })
    })
    .catch(error => {
      if (error) {
        console.log(error)
      }
    })
}

export const fetchItems = () => dispatch => {
  dispatch({ type: LOADING_CONTENT })
  axios
    .get('/api/dashboard')
    .then(res => {
      dispatch({ type: ADMIN_FETCH_ITEM, payload: res.data })
      dispatch({ type: ITEMS_FETCH_SUCCESS })
    })
    .catch(error => {
      if (error) {
        dispatch({ type: ITEMS_FETCH_FAIL, error: error })
      }
    })
}

export const searchItem = value => dispatch => {
  axios
    .post('/api/dashboard/detail', { refCode: value })
    .then(res => {
      const item = res.data.item
      if (item) {
        dispatch({ type: ADMIN_ITEM_SEARCH, payload: item, meta: '' })
      } else {
        dispatch({
          type: ADMIN_ITEM_SEARCH,
          payload: [],
          meta: res.data.error
        })
      }
    })
    .catch(error => {
      if (error) {
        console.log(error)
      }
    })
}

export const deleteItem = item => dispatch => {
  axios
    .post('/api/dashboard/detail/delete', { refCode: item[0].refCode })
    .then(res => {
      const item = res.data
      if (item) {
        dispatch({
          type: ADMIN_ITEM_DELETE,
          payload: item,
          success: 'Item deleted'
        })
      } else {
        dispatch({ type: ADMIN_ITEM_DELETE, payload: [], error: item.error })
      }
    })
    .catch(error => {
      if (error) {
        console.log(error)
      }
    })
}

// Search Items Service

const postServiceData = values => {
  return axios.post('api/service', values)
}

export const serviceSubmit = makeThunkAsyncActionCreator(
  'SERVICE_SUBMIT',
  postServiceData
)

