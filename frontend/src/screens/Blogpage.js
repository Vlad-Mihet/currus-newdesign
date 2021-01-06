import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'
import { listBlogs } from '../redux/actions/blogActions'
import BlogPost from '../components/BlogPost'



export const Blogpage = () => {

    const dispatch = useDispatch()

    const blogList = useSelector(state => state.blogList);
    const { blogs, loading, error } = blogList;

    useEffect(() => {
        dispatch(listBlogs());
    }, [dispatch])

    return (
        <>
        <Breadcrumbs />
        <div className="blogpage">
            
            BlogPage
            <aside>
                <h3>Latest Post</h3>

                <h3>Blog Categories</h3>

                <h3>Tags</h3>

                <h3>Archives</h3>
            </aside>
            <article>
                { blogs && blogs.map(blog => (
                    <BlogPost key={blog._id} blog={blog}></BlogPost>
                ))}
            </article>
        </div>
        </>
    )
}
