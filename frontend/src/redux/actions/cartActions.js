import Axios from 'axios'
import { CART_ADD_ITEM, SAVE_SHIPPING, SAVE_TOTAL, SAVE_COUPON, SAVE_SUBTOTAL, CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAILURE } from '../constants/cartConstants'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);

    dispatch({
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

export const checkout = (order) => async (dispatch) => {

    dispatch({ type: CHECKOUT_REQUEST, payload: order  })
    try {
        const { data } = await Axios.post(`/api/orders`, order)
        dispatch({ type: CHECKOUT_SUCCESS, payload: data.order })
    } catch(error) {
        dispatch({ type: CHECKOUT_FAILURE, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}

export const saveShipping = (shippingprice) => (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING,
        payload: shippingprice
    })
}

export const saveTotal = (total) => (dispatch) => {
    dispatch({
        type: SAVE_TOTAL,
        payload: total
    })
}

export const saveCoupon = (couponprice) => (dispatch) => {
    dispatch({
        type: SAVE_COUPON,
        payload: couponprice
    })
}

export const saveSubtotal = (subtotal) => (dispatch) => {
    dispatch({
        type: SAVE_SUBTOTAL,
        payload: subtotal
    })
}
