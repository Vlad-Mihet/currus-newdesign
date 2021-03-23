import {
  WARRANTY_CREATE_REQUEST,
  WARRANTY_CREATE_SUCCESS,
  WARRANTY_CREATE_FAIL,
} from "../constants/warrantyConstants";

export const warrantyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case WARRANTY_CREATE_REQUEST:
      return { loading: true };
    case WARRANTY_CREATE_SUCCESS:
      return { loading: false, success: true, warranty: action.payload };
    case WARRANTY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
