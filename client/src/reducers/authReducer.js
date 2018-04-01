import * as actionType from "../actions/types";

const initialstate = {
  user: null
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case actionType.FETCH_USER:
      return {
        ...state,
        user: action.payload || false
      }

    default:
      return state;
  }
}
