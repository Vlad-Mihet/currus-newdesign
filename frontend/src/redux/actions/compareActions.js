import Axios from 'axios'
import { COMPARE_ADD_ITEM } from '../constants/compareConstants.js'


export const addToCompare = (productId) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);

    dispatch({
        type: COMPARE_ADD_ITEM,
        payload: {
            id: data._id,
            name: data.name,
            priceUSD: data.priceUSD,
            priceCAD: data.priceCAD,
            image: data.image,
            description: data.description,
            quick: data.quick,
            speed: data.speed,
            power: data.power,
        }
    })
}