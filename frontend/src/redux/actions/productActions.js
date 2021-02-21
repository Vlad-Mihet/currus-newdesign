import Axios from 'axios';
import { PRODUCT_DETAILS_FAIL, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_REQUEST, FILTER_PRODUCTS_BY_SIZE, SORT_PRODUCTS_BY_PRICE, REVIEW_CREATE_FAIL, REVIEW_CREATE_REQUEST, REVIEW_CREATE_SUCCESS, REVIEW_LIST_REQUEST, REVIEW_LIST_SUCCESS, REVIEW_LIST_FAIL } from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });

    try {
        const { data } = await Axios.get('/api/products/')
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
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

// add power, color 
export const filterProducts = (products, category, low, high, speed, power, color) => (dispatch) => {
    if (low === null || low === undefined || low === "" ) { low = 0 }
    if (high === null || high === undefined || high === "" ) { high = 1000000 }
    if (category === null || category === undefined || category === '') { category = "" }
    if (speed === null || speed === undefined || speed === '') { speed = "" }
    if (power === null || power === undefined || power === '') { power = "" }
    if (color === null || color === undefined || color === '') { color = "" }
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            products: products,
            filteredProducts: (category !== '' && speed === '' && power === '' && color === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.category === category)) : 
                            (speed !== '' && category === '' && power === '' && color === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.speed <= speed)) : 
                            (power !== '' && speed === '' && category === '' && color === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.power <= power)) : 
                            (color !== '' && speed === '' && power === '' && category === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.color === color)) : 

                            (category !== '' && speed !== '' && power === '' && color === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.category === category) && (product.speed <= speed)) : 
                            (category !== '' && power !== '' && speed === '' && color === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.category === category) && (product.power <= power)) : 
                            (category !== '' && color !== '' && power === '' && speed === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.category === category) && (product.color === color)) : 
                            (speed !== '' && power !== '' && color === '' && category === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.speed <= speed) && (product.power <= power)) : 
                            (speed !== '' && color !== '' && power === '' && category === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.speed <= speed) && (product.color === color)) : 
                            (power !== '' && color !== '' && speed === '' && category === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.power <= power) && (product.color === color)) : 

                            (category !== '' && speed !== '' && power !== '' && color === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.category === category) && (product.speed <= speed) && (product.power <= power)) : 
                            (category !== '' && speed !== '' && color !== '' && power === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.category === category) && (product.speed <= speed) && (product.color === color)) : 
                            (category !== '' && power !== '' && color !== '' && speed === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.category === category) && (product.power <= power) && (product.color === color)) : 
                            (speed !== '' && power !== '' && color !== '' && category === '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.color === color) && (product.speed <= speed) && (product.power <= power)) : 
                            (category !== '' && speed !== '' && power !== '' && color !== '') ? products.filter(product => (product.priceUSD > low) && (product.priceUSD < high) && (product.category === category) && (product.speed <= speed) && (product.power <= power) && (product.color === color)) : 
                                                                                                products.filter(product => (product.priceUSD > low) && (product.priceUSD < high))



        }
        
    })
}

export const sortProducts = (products, sort) => (dispatch) => {
    const sortedProducts = products.slice();

    if(sort === "lowest") {
        sortedProducts.sort((a,b) => a.priceUSD - b.priceUSD)
    } else if (sort === "highest") {
        sortedProducts.sort((a,b) => b.priceUSD - a.priceUSD)
    } else if (sort === "alphabet") {
        sortedProducts.sort((a,b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
    } else if (sort === "alphabetz") {
        sortedProducts.sort((a,b) => b.name.toUpperCase().localeCompare(a.name.toUpperCase()))
    }

    dispatch({
        type: SORT_PRODUCTS_BY_PRICE,
        payload: {
            products: products,
            filteredProducts: sortedProducts
        }
    })
}

export const listReviews = (id) => async (dispatch) => {
    dispatch({
        type: REVIEW_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get(`/api/products/${id}/reviews`)
        dispatch({ type: REVIEW_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: REVIEW_LIST_FAIL, payload: error.message })
    }
}

export const createReview = (id, review) => async (dispatch) => {
    dispatch({
        type: REVIEW_CREATE_REQUEST
    })

    try {
        const { data } = await Axios.post(`/api/products/${id}/reviews`, review)
        dispatch({
            type: REVIEW_CREATE_SUCCESS, payload: data
        })
    } catch (error) {
        dispatch({
            type: REVIEW_CREATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}