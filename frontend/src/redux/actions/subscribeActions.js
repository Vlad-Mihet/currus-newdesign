import Axios from "axios";
import {
  SUBSCRIBE_REQUEST,
  SUBSCRIBE_FAILURE,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_RESET,
} from "../constants/subscribeConstants.js";

export const subscribe = (email) => async (dispatch) => {
  dispatch({ type: SUBSCRIBE_REQUEST, payload: email });
  try {
    const { data } = await Axios.post("/api/newsletters", { email });
    dispatch({ type: SUBSCRIBE_SUCCESS, payload: data.newsletter });
    setTimeout(() => {
      dispatch({ type: SUBSCRIBE_RESET });
    }, 10000);
  } catch (error) {
    dispatch({ type: SUBSCRIBE_FAILURE, payload: error.response });
  }
};
