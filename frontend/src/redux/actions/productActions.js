import Axios from 'axios';
import { PRODUCT_DETAILS_FAIL, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_REQUEST, FILTER_PRODUCTS_BY_SIZE, SORT_PRODUCTS_BY_PRICE } from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });

    try {
        const { data } = await Axios.get('/api/products/')
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
    });

    try {
        const { data } = await Axios.get(`/api/products/${productId}`)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message, })
    }
}

export const filterProducts = (products, category) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            products: products,
            filteredProducts: category === "" ? products: products.filter(product => product.category === category)
        }
        
    })
}

export const sortProducts = (products, sort) => (dispatch) => {
    const sortedProducts = products.slice();

    if(sort === "lowest") {
        sortedProducts.sort((a,b) => a.price - b.price)
    } else if (sort === "highest") {
        sortedProducts.sort((a,b) => b.price - a.price)
    }

    dispatch({
        type: SORT_PRODUCTS_BY_PRICE,
        payload: {
            products: products,
            filteredProducts: sortedProducts
        }
    })
}