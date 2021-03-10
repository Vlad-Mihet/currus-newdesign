import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


import Homepage from './screens/Homepage'
import Test from './screens/Test'
import Shoppage from './screens/Shoppage'
import Productpage from './screens/Productpage'
import Aboutuspage from './screens/Aboutuspage'
import Bloglistpage from './screens/Bloglistpage'
import Comparepage from './screens/Comparepage'
import Accountpage from './screens/Accountpage'
import Wishlistpage from './screens/Wishlistpage'
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
import ShoppageA from './screens/ShoppageA'


function App() {

    const [hamburger, setHamburger] = useState(false)
    const [sidecart, setSidecart] = useState(false)

    const cart = useSelector(state => state.cart)
    const { cartItems, totalPrice, shippingPrice, subtotal, afterCouponPrice } = cart

  return (
  
    <BrowserRouter>
      <MessengerCustomerChat appId="2880331345560627" pageId="103025775108325"/>
      <div className="grid-container">
        <Header sidecart={sidecart} setSidecart={setSidecart} hamburger={hamburger} setHamburger={setHamburger} />
        <aside className={sidecart? 'sidecart sidecartopen': 'sidecart sidecartclosed'}>
          <button className="sidecart_xbutton">
                <Icon onClick={() => setSidecart(false)} icon={closeIcon} style={{color: '#393636', fontSize: '24px'}} /> 
          </button>
          <div className="subtotal" id="box22">
                <h1>Product</h1>
                    <ul>
                        {cartItems.map(item => (
                        <li key={item.id}>
                            <img src={item.image}></img>
                            <div className="cartiteminfo">
                              <div>{item.name}</div>
                              <div>Qty: {item.qty}</div>
                              <div> ${item.priceUSD}</div>
                            </div>
                        </li>
                    ))}
                    </ul>     
          </div>
          <div className="viewcart_checkout">
              <Link to={'/cart'}>
                 <button onClick={() => setSidecart(!sidecart)}>VIEW CART</button>
              </Link>
              
          </div>
          
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
                      <li><Link onClick={() => setHamburger(false)} to="/">Home</Link></li>
                      <li><Link onClick={() => setHamburger(false)} to="/shop">Shop</Link></li>
                      <li><Link onClick={() => setHamburger(false)} to="/aboutus">About Us</Link></li>
                      <li><Link onClick={() => setHamburger(false)} to="/blog">Blog</Link></li>
                      <li><Link onClick={() => setHamburger(false)} to="/faq">FAQ</Link></li>
                      <li><Link onClick={() => setHamburger(false)} to="/dealer">Dealers</Link></li>
                      <li><Link onClick={() => setHamburger(false)} to="/contactus">Contact Us</Link></li>
                      {/* <li><Link to="/order">Order Tracking</Link></li> */}
                    </ul>
                  </nav>
                      <Link onClick={() => setHamburger(false)} id="login" to="/login">
                      LOGIN
                    </Link>

              </div>
        </aside>
        <div className="wrap">
          <Switch>
            <Route path="/" component={Homepage} exact></Route>
            <Route path="/shop" component={Shoppage}></Route> 
            <Route path="/shopa" component={ShoppageA}></Route> 
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
            <Route path="/compare" component={Comparepage}></Route>
            <Route path="/account" component={Accountpage}></Route>
            <Route path="/wishlist" component={Wishlistpage}></Route>
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
