import { CART_ADD_ITEM, SAVE_SHIPPING, SAVE_TOTAL, SAVE_COUPON } from '../constants/cartConstants'

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