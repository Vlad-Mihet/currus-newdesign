import { CART_ADD_ITEM } from '../constants/cartConstants'

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
        default:
            return state;
    }
}