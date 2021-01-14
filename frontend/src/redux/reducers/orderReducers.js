import { ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL } from "../constants/orderConstants";



export const orderDetailsReducer = (state = { blog: {}, loading: true}, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload };
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}