import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBlogs } from '../redux/actions/blogActions'

const BlogAside  = () => {

    const dispatch = useDispatch()
    const blogList = useSelector(state => state.blogList);
    const { blogs, loading, error } = blogList;

    useEffect(() => {
        dispatch(listBlogs());
    }, [dispatch])

    return (
        <>
        { blogs && (
        <div className="blog_aside">
            <h1>Latest Post</h1>

            <h1>Blog Categories</h1>

            <h1>Tags</h1>

            <h1>Archives</h1>
        </div>
        )
        }
        </>
    )
}


export default BlogAside