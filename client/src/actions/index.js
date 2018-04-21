import axios from "axios";
import {
  FETCH_USER,
  ADMIN_SUBMIT_SUCCESS,
  ADMIN_SUBMIT_FAILED,
  ADMIN_FETCH_ITEM,
  ADMIN_ITEM_SEARCH,
  ADMIN_ITEM_DELETE
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
      console.log(res.data)
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
        dispatch({ type: ADMIN_FETCH_ITEM, meta: error });
      }
    });
};

export const searchItem = value => dispatch => {
  axios
    .post("/api/dashboard/detail", { refCode: value })
    .then(res => {
      const item = res.data.item;
      if (item) {
        dispatch({ type: ADMIN_ITEM_SEARCH, payload: item, meta: "" });
      } else {
        dispatch({
          type: ADMIN_ITEM_SEARCH,
          payload: [],
          meta: res.data.error
        });
      }
    })
    .catch(error => {
      if (error) {
        console.log(error);
      }
    });
};

export const deleteItem = item => dispatch => {
  axios
    .post("/api/dashboard/detail/delete", { refCode: item[0].refCode })
    .then(res => {
      const item = res.data;
      if (item) {
        dispatch({
          type: ADMIN_ITEM_DELETE,
          payload: item,
          success: "Item deleted"
        });
      } else {
        dispatch({ type: ADMIN_ITEM_DELETE, payload: [], error: item.error });
      }
    })
    .catch(error => {
      if (error) {
        console.log(error);
      }
    });
};
