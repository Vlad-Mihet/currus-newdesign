import Axios from "axios";
import { CHANGE_CURRENCY } from "../constants/currencyConstants";

export const changeCurrency = (currency) => (dispatch) => {
  dispatch({ type: CHANGE_CURRENCY, payload: currency });
};
