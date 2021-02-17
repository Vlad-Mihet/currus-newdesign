import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { subscribe } from '../redux/actions/subscribeActions'

const RedBand = () => {

    const [email, setEmail] = useState('')
    const dispatch = useDispatch();

    const subscri = useSelector(state => state.subscribe)
    const { sub, loading, error } = subscri

    const subscribeHandler = () => {
      dispatch(subscribe(email))
      setEmail('')
    }

    return (
        <div className="redband_wrapper">
            <div className="redband">
                <div id="signuptonewsletter">
                    Sign Up to Newsletter
                </div>
                <div id="getallthelatest">
                    Get all the latest information on Discounts, Sales, and Offers
                </div>
                <div id="subscribe">
                { !sub ? (
                <>
                
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"></input>
                <button onClick={subscribeHandler}>Subscribe</button>
                </> ) : (<h1>Thank you for subscribing. </h1>)
                }
                </div>
            </div>
        </div>
    )
}


export default RedBand;