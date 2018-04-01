import axios from "axios";
import { FETCH_USER, ADMIN_SUBMIT_SUCCESS, ADMIN_SUBMIT_FAILED } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/profile");
  return dispatch({ type: FETCH_USER, payload: res.data });
};

export const adminDataSubmit = (values) => dispatch => {
  axios
    .post("/api/dashboard", values)
    .then(res => {
      if (res.data.error) {
        dispatch({ type: ADMIN_SUBMIT_FAILED, payload: res.data.error });
      }else{
        dispatch({ type: ADMIN_SUBMIT_SUCCESS, payload: res.data.success });
      }
    })
    .catch(error => {
      if(error) {
        console.log(error)
      }
    });
};
