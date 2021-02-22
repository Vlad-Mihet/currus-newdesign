import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { subscribe } from '../redux/actions/subscribeActions'
import { Icon, InlineIcon } from '@iconify/react';
import scFacebook from '@iconify/icons-ei/sc-facebook';
import scInstagram from '@iconify/icons-ei/sc-instagram';
import scTwitter from '@iconify/icons-ei/sc-twitter';
import scYoutube from '@iconify/icons-ei/sc-youtube';
import visaIcon from '@iconify/icons-logos/visa';
import mastercardIcon from '@iconify/icons-logos/mastercard';
import amexIcon from '@iconify/icons-logos/amex';
import paypalIcon from '@iconify/icons-logos/paypal';
import twotoneSupportAgent from '@iconify/icons-ic/twotone-support-agent';



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
          <div id="contact_us">
              <img src="images/curruslogowhite.png"></img>
              <div id="ifyouhave">
                If you have any question, please <br/>
                contact us at <span>info@currusmotors.com</span>
              </div>
              <div id="phone">
                <Icon icon={twotoneSupportAgent} style={{color: '#e7161b', fontSize: '50px'}} />
                <div>&nbsp;&nbsp;+1 80 <span>123 123 123</span></div>
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
          <div id="newsletter">
            <h6>Newsletter</h6>
            <div id="newsletter-description">
              Subscribe to the weekly newsletter for all the latest updates
            </div>
            { !sub ? (
            <div className="subscribenow_now">
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"></input>
            <button onClick={subscribeHandler}>SUBSCRIBE NOW</button>
            </div> ) : <h1>Thank you for subscribing. </h1>
            }
          </div>
          </div>
          <div id="two">
            <div id="copyright">
            Copyright 2021 <span>Currusmotors</span> All Rights Reservred
            </div>
            <div id="social_icons">
              <a href="https://facebook.com/currusmotors" target="_blank" ><Icon icon={scFacebook} style={{color: '#ffffff', fontSize: '24px'}} /></a>
              <a href="https://twitter.com/currusmotors" target="_blank" ><Icon icon={scTwitter} style={{color: '#ffffff', fontSize: '24px'}} /></a>
              <a href="https://instagram.com/currusmotors" target="_blank" ><Icon icon={scInstagram} style={{color: '#ffffff', fontSize: '24px'}} /></a>
              <a href="https://youtube.com/channel/UC4ko00dckfzvi8hrECa-cwQ" target="_blank" ><Icon icon={scYoutube} style={{color: '#ffffff', fontSize: '24px'}} /></a>
            </div>
            <div id="card">
              <Icon icon={visaIcon} style={{ backgroundColor: '#DFE3E8', fontSize: '15px' }}/>
              <Icon icon={mastercardIcon} style={{backgroundColor: '#DFE3E8', fontSize: '15px' }} />
              <Icon icon={amexIcon} style={{backgroundColor: '#DFE3E8', fontSize: '15px' }}/>
              <Icon icon={paypalIcon} style={{backgroundColor: '#DFE3E8', fontSize: '15px' }} />
           </div>
          </div>
        </footer>
    )
}


export default Footer