import Axios from "axios";
import {
  RETURN_CREATE_REQUEST,
  RETURN_CREATE_SUCCESS,
  RETURN_CREATE_FAIL,
} from "../constants/returnConstants.js";

export const createReturn = (returns) => async (dispatch) => {
  dispatch({ type: RETURN_CREATE_REQUEST, payload: returns });
  try {
    const { data } = await Axios.post("/api/returns", returns);
    dispatch({ type: RETURN_CREATE_SUCCESS, payload: data.returns });
  } catch (error) {
    dispatch({ type: RETURN_CREATE_FAIL, payload: error.response });
  }
};
