import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLaptop, faHashtag, faAd, faAngry } from '@fortawesome/free-solid-svg-icons'

import Homepage from './screens/Homepage'
import Test from './screens/Test'

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
                  <div className="sub-menu">
                    <div>Shop</div>
                    <div>About Us</div>
                    <div>Blog</div>
                    <div>FAQ</div>
                    <div>Dealers</div>
                    <div>Contact Us</div>
                  </div>
                  <div className="login_cart">
                    <div>Login</div>
                    <div>Cart</div>
                  </div>
                </div>
            </div>
        </header>
        <Route path="/" component={Homepage} exact></Route>
        <Route path="/test" component={Test}></Route>
        <footer className="row">

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
