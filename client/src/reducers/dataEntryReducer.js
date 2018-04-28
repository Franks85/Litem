import * as actionType from "../actions/types";

const initialstate = {
  loading: false,
  clientMsg: "",
  itemSaved: false,
  fail: true,
  items: [],
  fetchError: '',
  itemDetail: [],
  searchFailMsg: '',
  deleteSuccessMsg: '',
  deleteFailMsg: ''
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case actionType.LOADING_CONTENT:
      return {
        ...state,
        loading: true
      }
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
    case actionType.ADMIN_FETCH_ITEM:
      return {
        ...state,
        items: action.payload || false,
        fetchError: ''
        
      }
    case actionType.ITEMS_FETCH_FAIL:
     return {
        ...state,
        items: null,
        fetchError: action.error

     }
    case actionType.ITEMS_FETCH_SUCCESS:
     return {
       ...state,
       loading: false
     }
    case actionType.ADMIN_ITEM_SEARCH:
      return {
        ...state,
        itemDetail: action.payload,
        searchFailMsg: action.meta
      }
    case actionType.ADMIN_ITEM_DELETE:
     return {
      ...state,
      deleteSuccessMsg: action.success,
      deleteFailMsg: action.error,
      items: state.items.filter(item => item !== action.payload)
     }
    default: 
      return state;
  }

}
