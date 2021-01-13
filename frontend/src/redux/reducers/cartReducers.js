import { CART_ADD_ITEM, SAVE_SHIPPING, SAVE_TOTAL, SAVE_COUPON, SAVE_SUBTOTAL, CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAILURE } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: []}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id)
            if (existItem) {
                return {
                    ...state,
                    cartItems: [...state.cartItems.map(x => (
                        x.id === item.id ? {...x, qty: x.qty + item.qty} : {...x}
                    ))]
                }
            }
            return { ...state, cartItems: [...state.cartItems, item] };
        case SAVE_SUBTOTAL:
            return { ...state, subtotal: action.payload }
        case SAVE_SHIPPING:
            return { ...state, shippingPrice: action.payload }
        case SAVE_TOTAL:
            return { ...state, totalPrice: action.payload }
        case SAVE_COUPON:
            return { ...state, afterCouponPrice: action.payload }
        default:
            return state;
    }
}

export const checkoutReducer = (state = {}, action) => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return { ...state, loading: true }
        case CHECKOUT_SUCCESS:
            return { ...state, loading: false, order: action.payload }
        case CHECKOUT_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}