import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import Category from '../components/Category'
import OurBlog from '../components/OurBlog'
import RideRiskFree from '../components/RideRiskFree'
import WhyTheBest from '../components/WhyTheBest'
import { subscribe } from '../redux/actions/subscribeActions'

function Homepage() {

    const [email, setEmail] = useState('')
    const dispatch = useDispatch();

    const subscri = useSelector(state => state.subscribe)
    const { sub, loading, error } = subscri

    const subscribeHandler = () => {
      dispatch(subscribe(email))
      setEmail('')
    }

    return (
        <div id="homepage">
            <Banner />
            <Category />
            <WhyTheBest />
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
            { !sub ? (
            <div>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"></input>
            <button onClick={subscribeHandler}>Subscribe</button>
            </div> ) : <h1>Thank you for subscribing. </h1>
            }
                 
                </div>

            </div>
            <RideRiskFree />
            <OurBlog />

        </div>
    )
}


export default Homepage