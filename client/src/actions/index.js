import axios from "axios";
import {
  FETCH_USER,
  ADMIN_SUBMIT_SUCCESS,
  ADMIN_SUBMIT_FAILED,
  ADMIN_FETCH_ITEM
} from "./types";

// authReducer
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/profile");
  return dispatch({ type: FETCH_USER, payload: res.data });
};

// adminReducer
export const adminDataSubmit = values => dispatch => {
  axios
    .post("/api/dashboard", values)
    .then(res => {
      if (res.data.error) {
        dispatch({ type: ADMIN_SUBMIT_FAILED, payload: res.data.error });
      } else {
        dispatch({ type: ADMIN_SUBMIT_SUCCESS, payload: res.data.success });
      }
    })
    .catch(error => {
      if (error) {
        console.log(error);
      }
    });
};

export const fetchItems = () => dispatch => {
  axios
    .get("/api/dashboard")
    .then(res => {
      dispatch({ type: ADMIN_FETCH_ITEM, payload: res.data });
    })
    .catch(error => {
      if (error) {
        dispatch({ type: ADMIN_FETCH_ITEM, meta: error})
      }
    });
};
