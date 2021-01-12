import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { blogListReducer, blogDetailsReducer } from './reducers/blogReducers'
import { dealerCreateReducer } from './reducers/dealerReducers';
import { contactCreateReducer } from './reducers/contactReducers'
import { returnCreateReducer } from './reducers/returnReducers'
import { warrantyCreateReducer } from './reducers/warrantyReducers';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';
import { subscribeReducer } from './reducers/subscribeReducers'
import { currencyReducer } from './reducers/currencyReducers'

const initialState = {};

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    blogList: blogListReducer,
    blogDetails: blogDetailsReducer,
    dealerCreate: dealerCreateReducer,
    contactCreate: contactCreateReducer,
    returnCreate: returnCreateReducer,
    warrantyCreate: warrantyCreateReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    subscribe: subscribeReducer,
    currency: currencyReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;
