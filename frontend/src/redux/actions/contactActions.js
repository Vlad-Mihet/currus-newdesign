import Axios from "axios";
import {
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_SUCCESS,
  CONTACT_CREATE_FAIL,
} from "../constants/contactConstants.js";

export const createContact = (contact) => async (dispatch) => {
  dispatch({ type: CONTACT_CREATE_REQUEST, payload: contact });
  try {
    const { data } = await Axios.post("/api/contacts", contact);
    dispatch({ type: CONTACT_CREATE_SUCCESS, payload: data.contact });
  } catch (error) {
    dispatch({ type: CONTACT_CREATE_FAIL, payload: error.response });
  }
};
