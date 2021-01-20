import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const OurBlog = () => {

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="ourblog">
            <h1>Our Blog</h1>
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
