import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const OurBlog = () => {

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };

    // const NextArrow = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //         className={className}
    //         style={{ ...style, display: "block", background: "green" }}
    //         onClick={onClick} />
    //     );
    // }

    // const PrevArrow = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //         className={className}
    //         style={{ ...style, display: "block", background: "red" }}
    //         onClick={onClick} />
    //     );
    // }

    const settings2 = {
        arrows: true,
        slidesToShow: 1,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
    }




    const [page, setPage] = useState(null)
    const [posts, setPosts] = useState(null)

    const query = `
    {
        pageCollection {
            items {
                id
                title
                theme
                author
                date
                picture {
                    url
                }

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
              setPage(data.pageCollection.items[0]);
              setPosts(data.pageCollection.items);
          });
    }, []);
    
    if (!page) {
        return "Loading...";
    }

    return (
        <div className="ourblog">
            <h1>Our Blog</h1>

            <div id="first">
                <Slider {...settings}>
            {posts && posts.map(post => (
            <Link to={`/blog/${post.id}`}>
            <div className="ourblog_post">
                <img style={{ width: "100%", height: "404px", maxWidth: "100%", objectFit: "cover" }} src={post.picture.url} />
                <div className="ourblog_post_textbox">
                    <div className="ourblog_post_textbox_black">
                        {post.date.split("T")[0]} by {post.author}
                    </div>
                    <div className="ourblog_post_textbox_white">
                        <span>{post.theme} </span>{post.title}    
                    </div>
                    
                </div>
            </div>
            </Link>
            ))}
                </Slider>
            </div>
            <div id="second">
                <div id="redquote">“</div>
                <Slider {...settings2}>
                    <div className="second_quote">
                        <p>Riding the Currus NF is like a dream come true. It's super awesome,
                            fun to ride, looks amazing and powerful and has a top speed of of 40 MPH. I don't know
                            what more you can expect from an e-scooter. Also, it easily folds, so I can carry it where it's not possible
                            to ride. It's a complete power package. I am glad that my parents got me Currus NF for my birthday
                            last month.
                            <br/><br/>
                            <span>L. JOSEPH (USA) </span>
                        </p>
                    </div>
                    <div>
                        <p>Another Review</p>
                    </div>
                    <div>
                        <p>Third Review</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default OurBlog
