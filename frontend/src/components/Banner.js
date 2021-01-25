import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

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
   
                 
                    <div className="your-vehicle">
                        Your Vehicle-Grade Scooter is Here
                    </div>
                    <div className="introducing">
                        Introducing Currus NF
                    </div>
                    <div className="text-banner__button">        
                        <div className="buy_now">
                            Buy Now
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Banner;