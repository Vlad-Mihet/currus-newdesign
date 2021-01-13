import Axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);

    dispatch ({
        type: CART_ADD_ITEM,
        payload: {
            id: data._id,
            name: data.name,
            priceUSD: data.priceUSD,
            priceCAD: data.priceCAD,
            qty,
        }
    })
}

export const applyCoupon = () => (dispatch) => {
    
}