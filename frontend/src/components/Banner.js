import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner_carousel">
            <Carousel showThumbs={false}>
                <div>
                    <img src="images/1.jpeg" />

                </div>
                <div>
                    <img src="images/2.jpeg" />
                    {/* <p className="legend">Second Picture Legend</p> */}
                </div>
            </Carousel>
                <div className="text-banner">
   
                 
                    <div id="your-vehicle">
                        Your <br/>Vehicle-Grade Scooter is Here
                    </div>
                    <div id="introducing">
                        Introducing Currus NF
                    </div>
                    <div id="text-banner__button">        
                        <div id="buy_now">
                            <Link style={{ color: 'white', textDecoration: 'none' }} to='/shop'>Buy Now</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Banner;