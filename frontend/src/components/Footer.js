import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
          <div className="contact_us">
              <div className="CONTACT">Contact Us</div>
              <div className="ifyouhave">
                If you have any question, please contact us at info@currusmotors.com
              </div>
          </div>
          <div className="support">
            <div className="support_title">
              Support
            </div>
            <ul>
              <li><Link to='/contactus'>Contact Us</Link></li>
              <li><Link to='/shipping'>Shipping</Link></li>
              <li><Link to='/return'>Return</Link></li>
              <li><Link to='/warranty'>Warranty &amp; Registration</Link></li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="legal">
            <div className="legal_title">
              Legal
            </div>
            <ul>
              <li><Link to='/privacypolicy'>Privacy Policy</Link></li>
              <li><Link to='/termsandconditions'>Terms and Conditions</Link></li>
              <li><Link to='/safety'>Currus Safety</Link></li>
              <li><Link to='/affiliateprogram'>Affiliate Program</Link></li>
              <li><Link to='/dealer'>Become a Dealer</Link></li>
            </ul>
          </div>
          <div className="newsletter">
            <div className="newsletter_title">
              Newsletter
            </div>
            <div className="newsletter-description">
              Subscribe to the weekly newsletter for all the latest updates
            </div>
            <input placeholder="Enter your email"></input>
            <button>Subscribe</button>
          </div>
          <div className="copyright">
            Copyright 2021 Currusmotors. All Rights Reservred
            <div className="social_icons"></div>
          </div>
        </footer>
    )
}


export default Footer