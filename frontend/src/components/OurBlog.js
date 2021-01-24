import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const OurBlog = () => {

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

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
    
    if (!page) {
        return "Loading...";
    }

    return (
        <div className="ourblog">
            <h1>Our Blog</h1>
            <h4>{page.title}</h4>
            <div id="first">
                <Slider {...settings}>
                    <div>
                        <img height={200} src="images/fa53cb9684.jpeg" />
                    </div>
                    <div>
                        <img height={200} src="images/61670.jpeg" />
                    </div>
                    <div>
                        <img height={200} src="images/26de61983a.jpeg" />
                    </div>
                    <div>
                        <img height={200} src="images/fa53cb9684.jpeg" />
                    </div>
                </Slider>
            </div>
            <div id="second">
                <Slider arrows={true} slidesToShow={1}>
                    <div>
                        <p>Riding the Currus NF is like a dream come true</p>
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
