import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Icon, InlineIcon } from '@iconify/react';
import scFacebook from '@iconify/icons-ei/sc-facebook';
import scInstagram from '@iconify/icons-ei/sc-instagram';
import scTwitter from '@iconify/icons-ei/sc-twitter';
import scYoutube from '@iconify/icons-ei/sc-youtube';
import bagIcon from '@iconify/icons-bytesize/bag';
import bxMenuAltLeft from '@iconify/icons-bx/bx-menu-alt-left';


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
                <select style={{ border: "None", background: "None", color: "white" }} onChange={(e) => handleCurrency(e.target.value)}>
                  <option value="USD">$ USD</option>
                  <option value="CAD">$ CAD</option>
                </select>
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
                      <button style={{ background: 'None', border: 'None' }} onClick={() => setHamburger(true)}>
                        <Icon icon={bxMenuAltLeft} style={{color: '#393636', fontSize: '24px'}} />
                      </button>
                    </div>
                  
                    <Link id="logo" to="/" style={{ margin: "0 auto" }}>
                      <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/currus_logo.png"></img>
                    </Link>
              
                  <nav id="menu_nav">
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
                    <div id="login">
                    { !userInfo ? (
                    <div><Link to='/login'>Login&nbsp;&nbsp;&nbsp;&nbsp;|</Link></div> ) :
                    (
                    <div><Link to='/logout' onClick={handleLogout}>Logout</Link></div>
                    ) } 
                    </div>
                    <div id="cart" style={{color: "rgba(102, 102, 102, 0.85)"}}><Link to='/cart'>Cart</Link> / ${Math.round(100 * itemsPrice) / 100}</div>
                    <div id="cartsizeparent">
                    <Icon icon={bagIcon} style={{color: 'black', fontSize: '25px' }}></Icon>
                  
                    <div id="cartsize">{cartItems.length}</div>
                  
                    </div>
                  </div>

            </div>
        </header>
        </>
    )
}

export default Header

