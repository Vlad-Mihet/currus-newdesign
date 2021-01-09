import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'


import Homepage from './screens/Homepage'
import Test from './screens/Test'
import Shoppage from './screens/Shoppage'
import Productpage from './screens/Productpage'
import Aboutuspage from './screens/Aboutuspage'
import { Blogpage } from './screens/Blogpage'
import Faqpage from './screens/Faqpage'
import Dealerpage from './screens/Dealerpage'
import Contactuspage from './screens/Contactuspage'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <div className="wrap">
          <Switch>
            <Route path="/" component={Homepage} exact></Route>
            <Route path="/shop" component={Shoppage}></Route> 
            <Route path="/product/:id" component={Productpage} exact></Route>
            <Route path="/aboutus" component={Aboutuspage}></Route>
            <Route path="/blog" component={Blogpage} exact></Route>
            <Route path="/faq" component={Faqpage} exact></Route>
            <Route path="/dealer" component={Dealerpage} exact></Route>
            <Route path="/contactus" component={Contactuspage} exact></Route>
            <Route path="/test" component={Test}></Route>
          </Switch>
        </div>
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
