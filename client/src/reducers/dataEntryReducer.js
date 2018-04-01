import * as actionType from "../actions/types";

const initialstate = {
  clientMsg: "",
  itemSaved: false,
  fail: true
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case actionType.ADMIN_SUBMIT_SUCCESS:
      return {
        ...state,
        clientMsg: action.payload || "",
        itemSaved: true,
        fail: false
      };
    case actionType.ADMIN_SUBMIT_FAILED:
      return {
        ...state,
        clientMsg: action.payload || "",
        itemSaved: false,
        fail: true
      };
    default: 
      return state;
  }

}
