import React from 'react'

import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom';

const Banner = () => {

    const indicatorStyles = {
        background: '#fff',
        width: 13,
        height: 13,
        display: 'block', 
        top: '50px',
      
        left: '90%',
        
        margin: '10px 8px',
        borderRadius: '100%'
    }

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2, 
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,  
        cursor: 'pointer',
        border: 'none',
        background: 'none'

    }

    return (
        <div className="banner">
            <div className="banner_carousel">
            <Carousel axis="vertical" showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <button type="button" onClick={onClickHandler} title={label} 
                style={{ ...arrowStyles, left: '90%', top: '40%' }}>
                    &#8963;
                </button>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
                <button type="button" onClick={onClickHandler} title={label}
                style={{ ...arrowStyles, left: '90%', top: '70%' }}>
                    &#8964;
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
                    <li style={{...indicatorStyles, background: '#393636' }}
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
                <div style={{display: 'flex', marginRight: '150px', justifyContent: 'flex-end'}}>
                    <img style={{ width: '400px',height: '500px' }} src="images/bbbc5fe88a5ca682c51189dc99db6385.png" />

                </div>
                <div>
                    <img />
                    {/* <p className="legend">Second Picture Legend</p> */}
                </div>
            </Carousel>
                <div className="text-banner">
   
                 
                    <div id="your-vehicle">
                        Your Vehicle-Grade Scooter is Here
                    </div>
                    <div id="introducing">
                        Introducing Currus NF
                    </div>
                    <div className="features">
                        <div className="feature_box">
                            <i className="fas fa-tachometer-alt"></i>
                            <div className="feature_box_text">
                                <div className="red_text_introducing">TOP SPEED</div>
                                <div className="black_text_introducing">25mph</div>
                            </div>
                        </div>
                        <div className="feature_box">
                            <i className="fas fa-bolt"></i>
                            <div className="feature_box_text">
                                <div className="red_text_introducing">BATTERY RANGE</div>
                                <div className="black_text_introducing">55-60 miles</div>
                            </div>
                        </div>
                        <div className="feature_box">
                            <i className="fas fa-shield-alt"></i>
                            <div className="feature_box_text">
                                <div className="red_text_introducing">ANTI-THEFT</div>
                                <div className="black_text_introducing">Smart Lock</div>
                            </div>
                        </div>
                    </div>
                    <div id="text-banner__button">   
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/shop'>
                        <div id="shop_now_circle">
                            <i className="fas fa-arrow-right"></i>
                        </div>

                        <div id="buy_now">
                            Shop Now
                        </div>
                    </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Banner;