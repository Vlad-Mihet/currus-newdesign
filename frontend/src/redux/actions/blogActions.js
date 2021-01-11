import Axios from 'axios'
import { BLOG_LIST_REQUEST, BLOG_LIST_SUCCESS, BLOG_LIST_FAIL, BLOG_DETAILS_REQUEST, BLOG_DETAILS_SUCCESS, BLOG_DETAILS_FAIL } from '../constants/blogConstants'

export const listBlogs = () => async (dispatch) => {
    dispatch({
        type: BLOG_LIST_REQUEST,
    });

    try {
        const { data } = await Axios.get('/api/blogs')
        dispatch({ type: BLOG_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: BLOG_LIST_FAIL, payload: error.message })
    }
}

export const detailsBlog = (blogId) => async (dispatch) => {
    dispatch({
        type: BLOG_DETAILS_REQUEST,
    })

    try {
        const { data } = await Axios.get(`/api/blogs/${blogId}`)
        dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: BLOG_DETAILS_FAIL, payload: error.message })
    }
}