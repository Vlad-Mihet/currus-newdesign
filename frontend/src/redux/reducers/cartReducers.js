import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING,
  SAVE_TOTAL,
  SAVE_COUPON,
  SAVE_SUBTOTAL,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
  CART_REMOVE_ONE,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      console.log(existItem);
      console.log("added an item");
      if (existItem) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.map((x) =>
              x.id === item.id ? { ...x, qty: x.qty + item.qty } : { ...x },
            ),
          ],
        };
      }
      return { ...state, cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      const id = action.payload;
      const foundItem = state.cartItems.find((x) => x.id === id);
      if (foundItem) {
        return {
          ...state,
          cartItems: [...state.cartItems.filter((x) => x.id !== id)],
        };
      } else {
        return state;
      }
    case CART_REMOVE_ONE:
      const productId = action.payload;
      const i = state.cartItems.find((x) => x.id === productId);
      if (i && i.qty > 1) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.map((x) =>
              x.id === productId ? { ...x, qty: x.qty - 1 } : { ...x },
            ),
          ],
        };
      } else {
        return state;
      }
    case SAVE_SUBTOTAL:
      return { ...state, subtotal: action.payload };
    case SAVE_SHIPPING:
      return { ...state, shippingPrice: action.payload };
    case SAVE_TOTAL:
      return { ...state, totalPrice: action.payload };
    case SAVE_COUPON:
      return { ...state, afterCouponPrice: action.payload };
    default:
      return state;
  }
};

export const checkoutReducer = (state = {}, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return { ...state, loading: true };
    case CHECKOUT_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case CHECKOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
