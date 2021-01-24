import { ORDER_DETAILS_RESET, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL } from "../constants/orderConstants";



export const orderDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload };
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_DETAILS_RESET:
            return {};
        default:
            return state;
    }
}