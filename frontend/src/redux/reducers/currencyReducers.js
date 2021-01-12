import { CHANGE_CURRENCY } from '../constants/currencyConstants'

export const currencyReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY:
            return { currency: action.payload };
        default:
            return state;
    }
}