import Axios from 'axios';
import { ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_RESET } from '../constants/orderConstants';


export const trackOrder = (orderId) => async (dispatch) => {
    dispatch({
        type: ORDER_DETAILS_REQUEST
    });

    try {
        const { data } = await Axios.get(`/api/orders/${orderId}`)
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ORDER_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message, })
    }
}

export const resetOrder = () => (dispatch) => {
    dispatch({ type: ORDER_DETAILS_RESET });
}