import Axios from 'axios'
import { DEALER_CREATE_REQUEST, DEALER_CREATE_SUCCESS, DEALER_CREATE_FAIL } from '../constants/dealerConstants.js'

export const createDealer = (dealer) => async (dispatch) => {
    dispatch({ type: DEALER_CREATE_REQUEST, payload: dealer });
    try {
        const { data } = await Axios.post('/api/dealers', dealer)
        dispatch({ type: DEALER_CREATE_SUCCESS, payload: data.dealer })
    } catch (error) {
        dispatch({ type: DEALER_CREATE_FAIL, payload: error.response })
    }
}