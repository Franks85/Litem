import * as actionType from "../actions/types";

const initialstate = {
  user: false,
  loading: false,
  authenticated: false
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case actionType.FETCH_USER:
      return {
        ...state,
        user: action.payload || false
      }
    case actionType.LOADING_CONTENT:
      return {
        ...state,
        loading: true
      }
      case actionType.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        authenticated: false
      }
      case actionType.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true
      }

    default:
      return state;
  }
}
