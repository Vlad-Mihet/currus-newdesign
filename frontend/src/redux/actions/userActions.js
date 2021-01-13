import Axios from 'axios';
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_SIGNOUT, USER_SIGNIN_FAIL, USER_REGISTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_FAIL } from '../constants/userConstants'

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password }});

    try {
        const { data } = await Axios.post('/api/users/signin', { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.response })
    }
}

export const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password }});
    try {
        const { data } = await Axios.post('/api/users/register', { name, email, password })
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.response })
    }
}

export const signout = () => (dispatch) => {
    dispatch({ type: USER_SIGNIN_SIGNOUT })
    
}