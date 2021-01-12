import Axios from 'axios'
import { WARRANTY_CREATE_REQUEST, WARRANTY_CREATE_SUCCESS, WARRANTY_CREATE_FAIL } from '../constants/warrantyConstants.js'

export const createWarranty = (warranty) => async (dispatch) => {
    dispatch({ type: WARRANTY_CREATE_REQUEST, payload: warranty });
    try {
        const { data } = await Axios.post('/api/warranties', warranty)
        dispatch({ type: WARRANTY_CREATE_SUCCESS, payload: data.warranty })
    } catch (error) {
        dispatch({ type: WARRANTY_CREATE_FAIL, payload: error.response })
    }
}