import {
  USER_DETAIL_SUCCESS,
  USER_SIGNIN_RESET,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SIGNOUT,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_WISHLIST_ITEM_DELETE,
} from "../constants/userConstants";
import { WISHLIST_ADD_ITEM } from "../constants/wishlistConstants";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNIN_SIGNOUT:
      return {};
    case USER_SIGNIN_RESET:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAIL_SUCCESS:
      return { userInfoDetail: action.payload };
    case USER_WISHLIST_ITEM_DELETE:
      return { userInfoDetail: action.payload };
    case WISHLIST_ADD_ITEM:
      return { userInfoDetail: action.payload };
    default:
      return state;
  }
};
