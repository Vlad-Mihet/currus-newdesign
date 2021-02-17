import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import Category from '../components/Category'
import Instagram from '../components/Instagram'
import OurBlog from '../components/OurBlog'
import RedBand from '../components/RedBand'
import Featured from '../components/Featured'
import RideRiskFree from '../components/RideRiskFree'
import WhyTheBest from '../components/WhyTheBest'

import { listProducts } from '../redux/actions/productActions';


function Homepage() {

    const dispatch = useDispatch()

   useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div id="homepage">
            <Banner />
            <Category />
            <Featured />
            <WhyTheBest />
            <RedBand />
            <RideRiskFree />
            <OurBlog />
            <Instagram />

        </div>
    )
}


export default Homepage