import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs'

function BlogPost({ blog }) {

    return (
        <section>
            {blog.title}
            {blog.author}
            {blog.content}
            <Link to={`/blog/${blog._id}`}>
                <button>Read More</button>
            </Link>
        </section>
    )
}

export default BlogPost