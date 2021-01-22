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

    const [page, setPage] = useState(null)

    const query = `
    {
        pageCollection {
            items {
                title

            }
        }
    }
    `

    useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/xotd7hfzkl7y/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer 8KtFtte2PR8gF1OFvIKxx5D7lDSBw59spjTurlbh1k0",
            },
            body: JSON.stringify({ query }),
        }).then((response) => response.json())
          .then(({ data, errors }) => {
              if (errors) {
                  console.error(errors);
              }
              console.log(data);
              setPage(data.pageCollection.items[0]);
          });
    }, []);
    
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
