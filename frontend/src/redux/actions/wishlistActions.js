import Axios from 'axios'
import { WISHLIST_ADD_ITEM } from '../constants/wishlistConstants'

export const addToWishlist = (userId, productId) => async (dispatch, getState) => {
    const { data } = await Axios.post(`/api/users/${userId}/wishlist/${productId}`);

    // payload is the user information
    dispatch({
        type: WISHLIST_ADD_ITEM,
        payload: data
    })
}