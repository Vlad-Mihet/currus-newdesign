import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { Icon, InlineIcon } from '@iconify/react';
import hundredPoints from '@iconify/icons-emojione-monotone/hundred-points';
import euroBanknote from '@iconify/icons-emojione-monotone/euro-banknote';
import shoppingBags from '@iconify/icons-emojione-monotone/shopping-bags';
import handshakeIcon from '@iconify/icons-emojione-monotone/handshake';


const Aboutuspage = (props) => {

    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div id="aboutus">
            <div id="aboutus_welcome">
                <div id="aboutus_first">
                    <h6>Welcome To <span>Currus</span></h6>
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
                        <br /><br />

I have found Chinese products to come with high rates of defects and as a professional this is unacceptable. I have been in the e-commerce business since 2014, primarily selling tech and transportation products, and have come to believe that nothing replaces real quality.
                        <br /><br />

So in 2018, we joined forces with a Korean company, the premier scooter manufacturer in the world who respect all safety standards. Their use of green technology and their CURRUS e-scooter met all the criteria for a North American market. We trust them and we trust their product. Eco-friendly, it surpasses our expectations for quality and has the beauty and the design we wanted. In the name of fun and adventure, as well as transforming urban transportation, we are now proud providers of this original e-scooter.</p>
                </div>
            </div>
            <div id="our">
                <h1>Our Working Principles</h1>
                <div id="principles">
                    <div className="principle">
                        <h3>Premium Product Quality</h3>
                        <Icon id="svg1" icon={hundredPoints} style={{color: '#393636', fontSize: '64px' }} />
                        <p>
Product quality matters the most when choosing a particular electric vehicle to customers. At CURRUS, we understand this truly. Hence, all our e-vehicles are of the highest quality, tested multiple times, with compliance to all modern-day safety standards.
                        </p>
                    </div>
                    <div className="principle">
                        <h3>Genuine Product Prices</h3>
                        <Icon id="svg2" icon={euroBanknote} style={{color: '#393636', fontSize: '64px'}} />
                        <p>
We offer quality e-vehicle products to our customers worldwide at the most competitive and genuine prices with zero quality compromise.
                        </p>
                    </div>
                    <div className="principle">
                        <h3>Customer Satisfaction</h3>
                        <Icon id="svg3" icon={shoppingBags} style={{color: '#393636', fontSize: '64px' }} />
                        <p>
We consider customer satisfaction as our foremost priority. Hence, we try to engage maximum with our customers through our user-friendly &amp; interactive website, customer support representatives (24X7 hours) to know all their queries or feedback about our services.
                        </p>
                    </div>
                    <div className="principle">
                        <h3>Transparency &amp; Trust</h3>
                        <Icon id="svg4" icon={handshakeIcon} style={{color: '#393636', fontSize: '64px'}} />
                        <p>
We believe customers and employees are the true pillars of our company’s success and the position that we have achieved today. So, eventually, it’s the trust in the company what binds people with us. We try to make every customer feel happy &amp; no delay services.
                        </p>
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