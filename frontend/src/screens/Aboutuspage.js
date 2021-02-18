import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'


const Aboutuspage = (props) => {

    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div id="aboutus">
            <div id="aboutus_welcome">
                <div style={{ padding: "10px" }}>
                    <h4>WELCOME TO CURRUS</h4>
                    <h1>About Us</h1>
                    <p>
                        As the official North American distributor of U-tech Korea’s 
innovative, high-end electric scooter, we are proud to be the 
best. An exciting development in the field of green technology, 
the CURRUS brand e-scooter was created in 2005 by a young 
team of engineers and designers who were driven to be at the 
forefront of the mobility device industry. 
                        <b>
                            CURRUS electric power scooters are an easy and fun way to 
get around your neighborhood or parks and require no fuel, 
thus leaving no carbon footprint! 
                        </b>
                    </p>
                </div>
                <div>
                    <img src="images/26de61983a.jpeg" />
                </div>
                <div>
                    <img style={{width: '90%' }} src="images/sidered.png" />
                </div>
                <div>
                    <p>
                        <b>
                            They feature a sleek design – creativity is core to our brand – and can be 
exhilarating to use. If you support green technology and want an 
alternative to biking, check it out!
                        </b>
                        As a businessman I am always looking for good, high quality products, 
innovation in the field of mobile technology and good designs. As a techie I 
am huge on clean technology so keep a sharp eye peeled for new green and 
affordable products of all kinds.

                    </p>
                </div>
            </div>


            <div id="our">
                <h1>Our Working Principles</h1>
                <div className="principles">
                    <div className="principles_principle">
                        <div className="principles_principle_circle">
                            <i className="fas fa-medal"></i>    
                        </div>
                        <div>
                            <h3>Premium Product Quality</h3>
                            <p>
    Product quality matters the most when choosing a particular electric vehicle to customers. At CURRUS, we understand this truly. Hence, all our e-vehicles are of the highest quality, tested multiple times, with compliance to all modern-day safety standards.
                            </p>
                        </div>
                    </div>
                    <div className="principles_principle">
                        <div className="principles_principle_circle">
                            <i className="fas fa-hand-holding-usd"></i>    
                        </div>
                        <div>
                            <h3>Genuine Product Prices</h3>
                            <p>
    We offer quality e-vehicle products to our customers worldwide at the most competitive and genuine prices with zero quality compromise.
                            </p>
                        </div>
                    </div>
                    <div className="principles_principle">
                        <div className="principles_principle_circle">
                            <i className="fas fa-star"></i>    
                        </div>
                        <div>
                        <h3>Customer Satisfaction</h3>
                        <p>
We consider customer satisfaction as our foremost priority. Hence, we try to engage maximum with our customers through our user-friendly &amp; interactive website, customer support representatives (24X7 hours) to know all their queries or feedback about our services.
                        </p>
                        </div>
                    </div>
                    <div className="principles_principle">
                        <div className="principles_principle_circle">
                            <i className="fas fa-handshake"></i>    
                        </div>
                        <div>
                            <h3>Transparency &amp; Trust</h3>
                            <p>
    We believe customers and employees are the true pillars of our company’s success and the position that we have achieved today. So, eventually, it’s the trust in the company what binds people with us. We try to make every customer feel happy &amp; no delay services.
                            </p>
                        </div>
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
 Our aim is to become the leading online retailer of top-quality &amp; cost-effective electric vehicles globally. We are also putting our best efforts to become the automatic first-choice of our customers when it comes to choosing personal smart mobility vehicles for travel. 
                    </p>
                </div>
                <div>
                    <h3>Our Vision</h3>
                    <p>
Our vision is to participate in the world clean technology revolution by delivering best-in-class electric mobility solutions to our customers worldwide.
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