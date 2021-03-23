import {
  DEALER_CREATE_REQUEST,
  DEALER_CREATE_SUCCESS,
  DEALER_CREATE_FAIL,
} from "../constants/dealerConstants";

export const dealerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DEALER_CREATE_REQUEST:
      return { loading: true };
    case DEALER_CREATE_SUCCESS:
      return { loading: false, success: true, dealer: action.payload };
    case DEALER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
