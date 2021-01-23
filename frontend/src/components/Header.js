import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Icon, InlineIcon } from '@iconify/react';
import scFacebook from '@iconify/icons-ei/sc-facebook';
import scInstagram from '@iconify/icons-ei/sc-instagram';
import scTwitter from '@iconify/icons-ei/sc-twitter';
import scYoutube from '@iconify/icons-ei/sc-youtube';

import { Link } from 'react-router-dom'
import { signout } from '../redux/actions/userActions'
import { changeCurrency } from '../redux/actions/currencyActions'

const Header = ({ hamburger, setHamburger }) => {

    const dispatch = useDispatch()
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin


    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const itemsPrice = cartItems.reduce((a, c) => a + c.priceUSD * c.qty, 0)

    const handleLogout = () => {
      dispatch(signout())
    }

    const handleCurrency = (currency) => {
      dispatch(changeCurrency(currency))
    }


    return (
        <>
        <header>
          <div className="bar">
       
              <div className="currency">
                <button onClick={() => handleCurrency('USD')}>USD</button>
                <button onClick={() => handleCurrency('CAD')}>CAD</button>
              </div>
              <div className="free-shipping-from">
                Free shipping from Los Angeles across USA &amp; CANADA
              </div>
              <div className="social-icons">
              <Icon icon={scFacebook} style={{color: '#ffffff', fontSize: '24px'}} />
              <Icon icon={scTwitter} style={{color: '#ffffff', fontSize: '24px'}} />
              <Icon icon={scInstagram} style={{color: '#ffffff', fontSize: '24px'}} />
              <Icon icon={scYoutube} style={{color: '#ffffff', fontSize: '24px'}} />
              </div>
          </div>

            <div className="menu">
                    <div id="hamburger">
                      <button onClick={() => setHamburger(true)}>Ham</button>
                    </div>
                  
                    <Link to="/">
                      <img src="images/currus_logo.png" ></img>
                    </Link>
              
                  <nav>
                    <ul>
                      <li><Link to="/shop">Shop</Link></li>
                      <li><Link to="/aboutus">About Us</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/faq">FAQ</Link></li>
                      <li><Link to="/dealer">Dealers</Link></li>
                      <li><Link to="/contactus">Contact Us</Link></li>
                      <li><Link to="/order">Order Tracking</Link></li>
                    </ul>
                  </nav>
                  
                  <div className="login_cart">
                    { !userInfo ? (
                    <div><Link to='/login'>Login</Link></div> ) :
                    (
                    <div><Link to='/logout' onClick={handleLogout}>Logout</Link></div>
                    ) }
                    <div><Link to='/cart'>Cart</Link> / ${itemsPrice}</div>
                  </div>

            </div>
        </header>
        </>
    )
}

export default Header

