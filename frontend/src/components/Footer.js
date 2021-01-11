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
              <li>Contact Us</li>
              <li>Shipping</li>
              <li>Return</li>
              <li>Warranty &amp; Registration</li>
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
              <li>Currus Safety</li>
              <li>Affiliate Program</li>
              <li>Become a Dealer</li>
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