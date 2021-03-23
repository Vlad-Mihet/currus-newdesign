import Axios from "axios";
import {
  USER_WISHLIST_ITEM_DELETE,
  USER_DETAIL_SUCCESS,
  USER_SIGNIN_RESET,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_SIGNOUT,
  USER_SIGNIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });

  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response });
  }
};

export const userreset = () => (dispatch) => {
  dispatch({ type: USER_SIGNIN_RESET });
};

export const detailsUser = (userId) => async (dispatch) => {
  try {
    const { data } = await Axios.get(`/api/users/${userId}`);
    dispatch({ type: USER_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteWishlistItem = (userId, itemId) => async (dispatch) => {
  try {
    const { data } = await Axios.put(`/api/users/${userId}/wishlist/${itemId}`);
    dispatch({ type: USER_WISHLIST_ITEM_DELETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response });
  }
};

export const fblogin = (name, email) => async (dispatch) => {
  try {
    const { data } = await Axios.post("/api/users/register", {
      name,
      email,
      password: "00000000",
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    try {
      const { data } = await Axios.post("/api/users/signin", {
        email,
        password: "00000000",
      });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: err.response });
    }
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response });
  }
};

export const signout = () => (dispatch) => {
  dispatch({ type: USER_SIGNIN_SIGNOUT });
};
