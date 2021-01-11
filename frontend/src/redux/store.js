import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { productDetailsReducer, productFilterReducer, productListReducer } from './reducers/productReducers';
import { blogListReducer, blogDetailsReducer } from './reducers/blogReducers'
import { dealerCreateReducer } from './reducers/dealerReducers';
import { contactCreateReducer } from './reducers/contactReducers'

const initialState = {};

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    blogList: blogListReducer,
    blogDetails: blogDetailsReducer,
    dealerCreate: dealerCreateReducer,
    contactCreate: contactCreateReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;
