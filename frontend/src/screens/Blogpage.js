import React, { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux'
import { detailsBlog } from '../redux/actions/blogActions'
import BlogAside from '../components/BlogAside';

const Blogpage = (props) => {

    const dispatch = useDispatch()
    const blogId = props.match.params.id

    const blogDetails = useSelector(state => state.blogDetails)
    const { loading, blog, error } = blogDetails

    useEffect(() => {
        dispatch(detailsBlog(blogId))
    }, [dispatch, blogId])

    return (
        <>
        <Breadcrumbs title={props.location.pathname} />
        <div className="blogpostpage">

        { blog && (
        <div>
            {blog.title}
            {blog.content}
            {blog.author}
        </div>
        )}

            <BlogAside />
        </div>
        </>
    )
}

export default Blogpage;