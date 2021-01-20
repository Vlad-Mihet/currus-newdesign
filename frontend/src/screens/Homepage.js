import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import Category from '../components/Category'
import OurBlog from '../components/OurBlog'
import RedBand from '../components/RedBand'
import RideRiskFree from '../components/RideRiskFree'
import WhyTheBest from '../components/WhyTheBest'


function Homepage() {



    return (
        <div id="homepage">
            <Banner />
            <Category />
            <WhyTheBest />
            <RedBand />
            <RideRiskFree />
            <OurBlog />
            <div className="instagram">
                
            </div>

        </div>
    )
}


export default Homepage