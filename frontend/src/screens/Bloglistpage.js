import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'




const Bloglistpage = (props) => {

    const dispatch = useDispatch()

    const [page, setPage] = useState(null)
    const [posts, setPosts] = useState('');  

    const query = `
    {
        pageCollection {
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
                comments

            }
        }
    }
    `

    const clickHandler = (id) => {
        props.history.push(`/blog/${id}`)
    }

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
         
              setPage(data.pageCollection.items[0]);
              setPosts(data.pageCollection.items)
             
          });
    }, []);
    
 

    return (
        <>
        <Breadcrumbs title={props.location.pathname} />
        <div className="blogpage">
            
           <div className="blogpage_gallery">
            {posts && posts.slice(0, 3).map((post, index) => 
            <div style={{ cursor: "pointer" }} onClick={() => clickHandler(post.id)} className="blogpage_box" key={post.id}>
                <img src={post.picture.url} />
                <div className="blogpage_box_text">
                    <div className="blogpage_box_text_text">
                        <div className="blogpage_box_theme">{post.theme}</div>
                        <div className="blogpage_box_title">{post.title}</div>
                        <div className="blogpage_box_flex">
                            <div className="blogpage_box_authorpic">
                                <img style={{width: '20px', height: '20px', borderRadius: '100%' }} src={post.authorPicture.url} />
                            </div>
                            <div className="blogpage_box_author">{post.author}</div>
                            <div className="blogpage_box_date">{post.date.split("T")[0]}</div>
                            {index === 0 && (
                                <>
                            <div className="blogpage_box_likes">
                                <i className="fas fa-heart"></i>
                                {post.likes}</div>
                            <div className="blogpage_box_comments">
                                <i className="fas fa-comment"></i>                      
                                {post.comments.length}</div>
                                </>
                            )}
                            </div>
                            
                    </div>

                </div>
            
               
            </div>
            )}
           </div>

           <div id="featured_titles">
               <h1>Featured Posts</h1>
               <h1>Most Popular</h1>
           </div>

           <div className="featured_popular">

                <div className="featured">
                    {posts && posts.slice(0,2).map(post => <div key={post.id} className="featured_post">
                        <div className="featured_img">
                            <img src={post.picture.url} />
                        </div>


                        <div className="featured_text">
                            <div className="featured_text_date">{post.date.split("T")[0]}</div>
                            <div className="featured_text_title">{post.title}</div>
                            <div className="featured_text_body">{post.body}</div>
                            <div className="featured_text_bottom">
                                <div className="featured_text_author">
                                    <div className="featured_text_author_picture">
                                        <img src={post.authorPicture.url} />
                                    </div>
                                    <div className="featured_text_author_posted">
                                        Posted By
                                        <div className="featured_text_author_posted_name">
                                            {post.author}
                                        </div>
                                    </div>   
                                </div>
                                <div className="featured_text_likes">
                                    <i className="fas fa-heart"></i>
                                {post.likes}
                                </div>
                                <div className="featured_text_comments">
                                    <i className="fas fa-comment"></i>
                                {post.comments.length}
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>

                <div className="mostpopular">
                    {posts && posts.slice(0,6).map(post => 
                        <div className="popular_post" key={post.id}>
                            <div>
                                <img src={post.picture.url} />       
                            </div>
                            <div className="popular_post_text">
                                <div className="popular_post_text_title">
                                    {post.title}
                                </div>
                                <div className="popular_post_text_date">
                                    {post.date.split("T")[0]}
                                </div>
                            </div>
                        </div>)}
                </div>

           </div>


           
   
        </div>
        </>
    )
}

export default Bloglistpage
