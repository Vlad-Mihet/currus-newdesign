import Axios from "axios";
import {
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_RESET,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from "../constants/orderConstants";

export const trackOrder = (orderId) => async (dispatch) => {
  dispatch({
    type: ORDER_DETAILS_REQUEST,
  });

  try {
    const { data } = await Axios.get(`/api/orders/${orderId}`);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listOrdersByCustomer = (customerId) => async (dispatch) => {
  dispatch({
    type: ORDER_LIST_REQUEST,
  });

  try {
    const { data } = await Axios.get(`/api/user/`);
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetOrder = () => (dispatch) => {
  dispatch({ type: ORDER_DETAILS_RESET });
};
