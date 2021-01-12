import { SUBSCRIBE_FAILURE, SUBSCRIBE_REQUEST, SUBSCRIBE_SUCCESS, SUBSCRIBE_RESET } from "../constants/subscribeConstants";


export const subscribeReducer = (state= {}, action) => {
    switch (action.type) {
        case SUBSCRIBE_REQUEST:
            return { loading: true }
        case SUBSCRIBE_SUCCESS:
            return { loading: false, sub: action.payload }
        case SUBSCRIBE_FAILURE:
            return { loading: false, error: action.payload };
        case SUBSCRIBE_RESET:
            return { loading: false };
        default:
            return state;
    }
}