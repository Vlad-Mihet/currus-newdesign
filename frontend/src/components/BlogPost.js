import React from 'react'

function BlogPost({ blog }) {

    return (
        <section>
            {blog.title}
            {blog.author}
            {blog.content}
        </section>
    )
}

export default BlogPost