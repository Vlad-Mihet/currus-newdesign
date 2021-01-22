import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'


const Aboutuspage = (props) => {

    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div id="aboutus">
            <div id="aboutus_welcome">
                <div id="aboutus_first">
                    <h6>Welcome To <strong>Currus</strong></h6>
                    <p>As the official North American distributor of U-tech</p>
                </div>
                <div id="aboutus_second">
                    <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/welcome1.jpeg" />
                </div>
                <div id="aboutus_third">
                    <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/welcome2.jpeg" />
                </div>
                <div id="aboutus_fourth">
                    <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/welcome3.jpeg" />
                </div>
                <div id="aboutus_fifth">
                    <p>As a businessman I am always </p>
                </div>
            </div>
            <div id="our">
                <h1>Our Working Principles</h1>
                <div id="principles">
                    
                    <div>
                        <h3>Premium Product Quality</h3>
                    </div>
                    <div>
                        <h3>Genuine Product Prices</h3>
                    </div>
                    <div>
                        <h3>Customer Satisfaction</h3>
                    </div>
                    <div>
                        <h3>Transparenty and Trust</h3>
                    </div>
                </div>
            </div>
            <div id="aim_vision">
                <div>
                    <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/welcome4.jpeg"></img>
                </div>
                <div>
                    <h3>Our Aim</h3>
                    <p>
                        Our aim is to become
                    </p>
                </div>
                <div>
                    <h3>Our Vision</h3>
                    <p>
                        Our vision is to participate in the world
                    </p>
                </div>
                <div>
                    <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/welcome2.jpeg"></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Aboutuspage