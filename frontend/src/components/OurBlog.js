import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const OurBlog = () => {
  const settings = {
    arrows: true,
    dots: true,
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
          slidesToShow: 1,
        },
      },
    ],
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          background: "#393636",
          fontFamily: "none",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "#393636" }}
        onClick={onClick}
      />
    );
  };

  const settings2 = {
    arrows: true,
    slidesToShow: 1,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [page, setPage] = useState(null);
  const [posts, setPosts] = useState(null);

  const query = `
    {
        pageCollection {
            items {
                id
                title
                theme
                author
                authorPicture {
                    url
                }
                date
                body
                picture {
                    url
                }
                likes
                comments
            }

        }
    }
    `;

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/xotd7hfzkl7y/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 8KtFtte2PR8gF1OFvIKxx5D7lDSBw59spjTurlbh1k0",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        console.log(data.pageCollection);
        setPage(data.pageCollection.items[0]);
        setPosts(data.pageCollection.items);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <div className="ourblog">
      <div className="ourblog_titlerow">
        <h1>Latest News</h1>
        <Link to="/blog">SEE ALL</Link>
      </div>

      <div id="first">
        <div className="featured">
          {posts &&
            posts.slice(0, 3).map((post) => (
              <div key={post.id} className="featured_post">
                <div className="featured_img">
                  <img src={post.picture.url} />
                </div>

                <div className="featured_text">
                  <div className="featured_text_date">
                    {post.date.split("T")[0]}
                  </div>
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
              </div>
            ))}
        </div>
      </div>
      <div id="second">
        <h1>Testimonials</h1>

        <div id="second_testimonial">
          <Slider {...settings2}>
            <div className="second_quote">
              <p>
                Riding the Currus NF is like a dream come true. It's super
                awesome, fun to ride, looks amazing and powerful and has a top
                speed of of 40 MPH. I don't know what more you can expect from
                an e-scooter. Also, it easily folds, so I can carry it where
                it's not possible to ride. It's a complete power package. I am
                glad that my parents got me Currus NF for my birthday last
                month.
                <br />
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
    </div>
  );
};

export default OurBlog;
