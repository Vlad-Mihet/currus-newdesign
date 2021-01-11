import { FILTER_PRODUCTS_BY_SIZE, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, SORT_PRODUCTS_BY_PRICE } from "../constants/productConstants";

export const productListReducer = (state = {products: [], loading: true}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_REQUEST:
            return { loading: true}
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        case FILTER_PRODUCTS_BY_SIZE:
            return { products: action.payload.products, filteredProducts: action.payload.filteredProducts }
        case SORT_PRODUCTS_BY_PRICE:
            return { ...state, filteredProducts: action.payload.filteredProducts }
        default:
            return state;
    }
}

export const productDetailsReducer = (state = {product: {}, loading: true }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading :false, error: action.payload }
        default:
            return state;
    }
}

