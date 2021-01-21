import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'
import { listBlogs } from '../redux/actions/blogActions'
import BlogPost from '../components/BlogPost'
import BlogAside from '../components/BlogAside'



const Bloglistpage = (props) => {

    const dispatch = useDispatch()

    const blogList = useSelector(state => state.blogList);
    const { blogs, loading, error } = blogList;

    useEffect(() => {
        dispatch(listBlogs());
    }, [dispatch])

    return (
        <>
        <Breadcrumbs title={props.location.pathname} />
        <div className="blogpage">
            
            BlogPage
            <BlogAside />
            <article>
                { blogs && blogs.map(blog => (
                    <BlogPost key={blog._id} blog={blog}></BlogPost>
                ))}
            </article>
        </div>
        </>
    )
}

export default Bloglistpage
