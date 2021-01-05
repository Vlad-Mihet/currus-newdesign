import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLaptop, faHashtag, faAd, faAngry } from '@fortawesome/free-solid-svg-icons'

import Homepage from './screens/Homepage'
import Test from './screens/Test'
import Shoppage from './screens/Shoppage'
import Productpage from './screens/Productpage'
import Aboutuspage from './screens/Aboutuspage'

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="menu">
          <div className="top-menu">
            <div className="rectangle-1">
              <div className="language">
                ENG FRA
              </div>
              <div className="currency">
                USD EUR 
              </div>
              <div className="free-shipping-from">
                Free shipping from Los Angeles across USA &amp; CANADA
              </div>
              <div className="social-icons">
                <FontAwesomeIcon icon={faLaptop} />
                <FontAwesomeIcon icon={faHashtag} />
                <FontAwesomeIcon icon={faAd} />
                <FontAwesomeIcon icon={faAngry} />
              </div>
            </div>
          </div>
            <div className="header-menu">
                <div className="rectangle-5">
                  <div className="logo">

                  </div>
                  <div className="search">

                  </div>
                  <nav className="navigation">
                    <ul>
                      <li>Shop</li>
                      <li>About Us</li>
                      <li>Blog</li>
                      <li>FAQ</li>
                      <li>Dealers</li>
                      <li>Contact Us</li>
                    </ul>
                  </nav>
                  <div className="login_cart">
                    <div>Login</div>
                    <div>Cart</div>
                  </div>
                </div>
            </div>
        </header>
        <Route path="/" component={Homepage} exact></Route>
        <Route path="/shop" component={Shoppage}></Route> 
        <Route path="/product/:id" component={Productpage} exact></Route>
        <Route path="/aboutus" component={Aboutuspage}></Route>
        <Route path="/test" component={Test}></Route>
        <footer className="footer">
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
              <li>Privacy Policy</li>
              <li>Term and Conditions</li>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
