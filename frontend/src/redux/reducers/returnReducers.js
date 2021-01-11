import { RETURN_CREATE_REQUEST, RETURN_CREATE_SUCCESS, RETURN_CREATE_FAIL } from '../constants/returnConstants'

export const returnCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case RETURN_CREATE_REQUEST:
            return { loading: true };
        case RETURN_CREATE_SUCCESS:
            return { loading: false, success: true, returns: action.payload };
        case RETURN_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}