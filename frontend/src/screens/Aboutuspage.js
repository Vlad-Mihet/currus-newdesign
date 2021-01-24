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
                    <p>As the official North American distributor of U-tech Korea’s innovative, high-end electric scooter, we are proud to be the best. An exciting development in the field of green technology, the CURRUS brand e-scooter was created in 2005 by a young team of engineers and designers who were driven to be at the forefront of the mobility device industry. CURRUS electric power scooters are an easy and fun way to get around your neighborhood or parks and require no fuel, thus leaving no carbon footprint! They feature a sleek design – creativity is core to our brand – and can be exhilarating to use. If you support green technology and want an alternative to biking, check it out!</p>
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
                    <p>As a businessman I am always looking for good, high quality products, innovation in the field of mobile technology and good designs. As a techie I am huge on clean technology so keep a sharp eye peeled for new green and affordable products of all kinds.

I have found Chinese products to come with high rates of defects and as a professional this is unacceptable. I have been in the e-commerce business since 2014, primarily selling tech and transportation products, and have come to believe that nothing replaces real quality.

So in 2018, we joined forces with a Korean company, the premier scooter manufacturer in the world who respect all safety standards. Their use of green technology and their CURRUS e-scooter met all the criteria for a North American market. We trust them and we trust their product. Eco-friendly, it surpasses our expectations for quality and has the beauty and the design we wanted. In the name of fun and adventure, as well as transforming urban transportation, we are now proud providers of this original e-scooter.</p>
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