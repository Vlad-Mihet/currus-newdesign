import React from 'react'

import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom';

const Banner = () => {

    const indicatorStyles = {
        background: '#fff',
        width: 18,
        height: 18,
        display: 'block', 
        top: '50px',
        bottom: '50%',
        left: '90%',
        
        margin: '10px 8px'
    }

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2, 
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,  
        cursor: 'pointer'
    }

    return (
        <div className="banner">
            <div className="banner_carousel">
            <Carousel axis="vertical" showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <button type="button" onClick={onClickHandler} title={label} 
                style={{ ...arrowStyles, left: '90%', top: '30%' }}>
                    -
                </button>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
                <button type="button" onClick={onClickHandler} title={label}
                style={{ ...arrowStyles, left: '90%', top: '80%' }}>
                    +
                </button>
            )}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li style={{ ...indicatorStyles, background: '#E7161B' }}
                        aria-label={`Selected: ${label} ${index + 1}`}
                        title={`Selected: ${label} ${index + 1}`} />
                    )
                }
                return (
                    <li style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                )
            }}>
                <div>
                    <img src="images/bbbc5fe88a5ca682c51189dc99db6385.png" />

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