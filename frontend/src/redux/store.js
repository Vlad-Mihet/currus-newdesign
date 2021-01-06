import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { blogListReducer } from './reducers/blogReducers'

const initialState = {};

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    blogList: blogListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;
