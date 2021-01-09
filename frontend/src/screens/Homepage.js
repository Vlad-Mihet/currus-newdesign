import React, { useState } from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import OurBlog from '../components/OurBlog'
import RideRiskFree from '../components/RideRiskFree'

function Homepage() {

    return (
        <div id="homepage">
            <Banner />
            <Category />
            <div className="whythebest">
                <div className="whycurrus">
                    Why Currus is the best way to get around
                </div>
                <div className="rectangle-24">
                </div>
                <div className="group_64">
                    <div className="group_60">
                        <div className="rectangle-45">

                        </div>
                        <div className="bringing">
                            Bringing Green Mobility Revolution is our Passion &amp; We Love Electric Vehicles
                        </div>
                        <div className="rectangle-46">

                        </div>
                        <div className="westarted">
                            We started because we believe driving EV leads to a sustainable future. We are eco-friendly enthusiasts, working agigely to increase usability, awareness among
                            people about electric vehicles. Our e-scooters are just a reflection of our company philosophy and values. To know more, you can
                        </div>
                    </div>
                    <div className="group_61">
                        <div className="rectangle-47">

                        </div>
                        <div className="rectangle-48">

                        </div>
                        <div className="wearealways">
                            We are always Ready to ehelp 24X7 for Free..!!!
                        </div>
                    </div>
                    <div className="group_62">
                        <div className="rectangle-47">
                            
                        </div>
                        <div className="shoppingisconvenient">
                            Shopping is Convenient, Easy and Hassle-Free..!!
                        </div>
                        <div className="rectangle-48">

                        </div>
                    </div>
                    <div className="group_63">
                        <div className="rectangle-47">
                            
                        </div>
                        <div className="everythingyouhate">
                            Everything you hate about commuting. Solved..!
                        </div>  
                        <div className="rectangle-48">

                        </div>                    
                    </div>
                </div>
                <div className="homepage_img">
                    <div className="ellipse_3">

                    </div>
                </div>

            </div>
            <div className="calltoaction">
                <div className="rectangle-49">

                </div>
                <div className="signuptonewsletter">
                    Sign Up to Newsletter
                </div>
                <div className="getallthelatest">
                    Get all the latest information on Discounts, Sales, and Offers
                </div>
                <div className="group-66">
                    <div className="rectangle-50">

                    </div>
                    <input className="enteryouremail" placeholder="Enter your e-mail" />
                    <button style={{width: "150px", height: "50px"}}></button>
                 
                </div>

            </div>
            <RideRiskFree />
            <OurBlog />

        </div>
    )
}


export default Homepage