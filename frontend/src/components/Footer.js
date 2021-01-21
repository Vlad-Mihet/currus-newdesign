import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { subscribe } from '../redux/actions/subscribeActions'

const Footer = () => {

    const [email, setEmail] = useState('')

    const dispatch = useDispatch();

    const subscri = useSelector(state => state.subscribe)

    const { sub, loading, error } = subscri

    const subscribeHandler = () => {
      dispatch(subscribe(email))
      setEmail('')
    }

    useEffect(() => {

    }, [])

    return (
        <footer>
          <div id="one">
          <div className="contact_us">
              <h6>Contact Us</h6>
              <div className="ifyouhave">
                If you have any question, please contact us at info@currusmotors.com
              </div>
          </div>
          <div className="support">
            <h6>Support</h6>
            <ul>
              <li><Link to='/contactus'>Contact Us</Link></li>
              <li><Link to='/shipping'>Shipping</Link></li>
              <li><Link to='/return'>Return</Link></li>
              <li><Link to='/warranty'>Warranty &amp; Registration</Link></li>
              <li><Link to='/faq'>FAQ</Link></li>
            </ul>
          </div>
          <div className="legal">
            <h6>Legal</h6>
            <ul>
              <li><Link to='/privacypolicy'>Privacy Policy</Link></li>
              <li><Link to='/termsandconditions'>Terms and Conditions</Link></li>
              <li><Link to='/safety'>Currus Safety</Link></li>
              <li><Link to='/affiliateprogram'>Affiliate Program</Link></li>
              <li><Link to='/dealer'>Become a Dealer</Link></li>
            </ul>
          </div>
          <div className="newsletter">
            <h6>Newsletter</h6>
            <div className="newsletter-description">
              Subscribe to the weekly newsletter for all the latest updates
            </div>
            { !sub ? (
            <div>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"></input>
            <button onClick={subscribeHandler}>Subscribe</button>
            </div> ) : <h1>Thank you for subscribing. </h1>
            }
          </div>
          </div>
          <div id="two">
            <div id="copyright">
            Copyright 2021 Currusmotors. All Rights Reservred
            </div>
            <div id="social_icons">

            </div>
            <div id="card">

           </div>
          </div>
        </footer>
    )
}


export default Footer