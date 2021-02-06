import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux'



const Blogpage = (props) => {

    const dispatch = useDispatch()
    const blogId = props.match.params.id

    const [page, setPage] = useState(null)
    const [posts, setPosts] = useState('');  
    const [recentposts, setRecentposts] = useState('')

    //skip limit where order preview locale 

    const query = `
    {
        pageCollection(
            where: {
                id: ${blogId}
            }
        ) {
            items {
                title
                id
                author
                authorPicture {
                    url
                    title
                }
                body
                date
                likes
                theme
                picture {
                    url
                    title
                }

            }
        }
    }
    `

    const queryrecent = `
        {
    pageCollection(
        order: [ date_DESC ]
    ) {
        items {
        id
        title
        author
        date
        }
    }
    }
    `

    useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL}`,
            },
            body: JSON.stringify({ query }),
        }).then((response) => response.json())
          .then(({ data, errors }) => {
              if (errors) {
                  console.error(errors);
              }
           
              setPage(data.pageCollection.items[0]);
              setPosts(data.pageCollection.items)
            
          });


    }, []);
    
    useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL}`,
            },
            body: JSON.stringify({ query: queryrecent }),
        }).then((response) => response.json())
          .then(({ data, errors }) => {
              if (errors) {
                  console.error(errors);
              }
            
              setRecentposts(data.pageCollection.items)
          });
    }, [])

  

    return (
        <>
        <Breadcrumbs title={props.location.pathname} />
        {
        page &&
        <div className="blog_page">
            <div className="blog_page_head">
                <h1 className="blog_page_head_theme">{page.theme}</h1>
                <h1 className="blog_page_head_title">{page.title}</h1>

                <h2 className="blog_page_head_postedon">POSTED ON <span>{page.date.split("T")[0]}</span> BY <span>{page.author}</span></h2>
                <img src={page.picture.url} />
               
                
            </div>
            <div className="blog_page_grid">
                <div>
                    <p className="blog_page_grid_par">{page.body}</p>
                </div>
                <div>
                    <div className="blog_page_grid_latest">
                        <h1>Latest Post</h1>
                        {recentposts && recentposts.map(r => (
                            <div className="blog_page_grid_latest_post">
                                {r.date.split("T")[0]}&nbsp;{r.title}
                            </div>
                        ))}
                        <h1>Blog Categories</h1>
                        
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Blogpage;