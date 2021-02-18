import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'


import Homepage from './screens/Homepage'
import Test from './screens/Test'
import Shoppage from './screens/Shoppage'
import Productpage from './screens/Productpage'
import Aboutuspage from './screens/Aboutuspage'
import Bloglistpage from './screens/Bloglistpage'
import Blogpage from './screens/Blogpage'
import Faqpage from './screens/Faqpage'
import Dealerpage from './screens/Dealerpage'
import Contactuspage from './screens/Contactuspage'
import Privacypage from './screens/Privacypage'
import Termsandconditions from './screens/Termsandconditions'
import Safety from './screens/Safety'
import Affiliate from './screens/Affiliate'
import Shipping from './screens/Shipping'
import Header from './components/Header'
import Footer from './components/Footer'
import Returnpage from './screens/Returnpage'
import Warranty from './screens/Warranty'
import Login from './screens/Login'
import Register from './screens/Register'
import Logout from './screens/Logout'
import Cartpage from './screens/Cartpage'
import Orderpage from './screens/Orderpage'
import Checkoutpage from './screens/Checkoutpage'
import Thankyou from './screens/Thankyou'

import MessengerCustomerChat from 'react-messenger-customer-chat'

import {Icon, InlineIcon } from '@iconify/react';
import closeIcon from '@iconify/icons-carbon/close';


function App() {

    const [hamburger, setHamburger] = useState(false)
    const [sidecart, setSidecart] = useState(false)

  return (
  
    <BrowserRouter>
      <MessengerCustomerChat appId="2880331345560627" pageId="103025775108325"/>
      <div className="grid-container">
        <Header sidecart={sidecart} setSidecart={setSidecart} hamburger={hamburger} setHamburger={setHamburger} />
        <aside className={sidecart? 'sidecartopen': 'sidecartclosed'}>
          test
        </aside>
        <aside id="hamburgermenu" className={hamburger? 'hamburger hamburgeropen': 'hamburger hamburgerclosed' }>
          <div id="xparent">
            <div id="x">
                <Icon onClick={() => setHamburger(false)} icon={closeIcon} style={{color: '#393636', fontSize: '24px'}} />
            </div>
          </div>
              <div id="content">
                  <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/currus_logo.png" ></img>
                  <nav id="hamburger_nav">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/shop">Shop</Link></li>
                      <li><Link to="/aboutus">About Us</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/faq">FAQ</Link></li>
                      <li><Link to="/dealer">Dealers</Link></li>
                      <li><Link to="/contactus">Contact Us</Link></li>
                      <li><Link to="/order">Order Tracking</Link></li>
                    </ul>
                  </nav>
                      <Link id="login" to="/login">
                      LOGIN
                    </Link>

              </div>
        </aside>
        <div className="wrap">
          <Switch>
            <Route path="/" component={Homepage} exact></Route>
            <Route path="/shop" component={Shoppage}></Route> 
            <Route path="/product/:id" component={Productpage} exact></Route>
            <Route path="/aboutus" component={Aboutuspage}></Route>
            <Route path="/blog" component={Bloglistpage} exact></Route>
            <Route path="/blog/:id" component={Blogpage}></Route>
            <Route path="/faq" component={Faqpage} exact></Route>
            <Route path="/dealer" component={Dealerpage} exact></Route>
            <Route path="/contactus" component={Contactuspage} exact></Route>
            <Route path="/privacypolicy" component={Privacypage}></Route>
            <Route path="/termsandconditions" component={Termsandconditions}></Route>
            <Route path="/safety" component={Safety}></Route>
            <Route path="/affiliateprogram" component={Affiliate}></Route>
            <Route path="/shipping" component={Shipping}></Route>
            <Route path="/return" component={Returnpage}></Route>
            <Route path="/warranty" component={Warranty}></Route>
            <Route path="/test" component={Test}></Route>
            <Route path="/cart/:id?" component={Cartpage}></Route>
            <Route path="/order" component={Orderpage}></Route>
            <Route path="/checkout" component={Checkoutpage}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/thankyou" component={Thankyou}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>

          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
