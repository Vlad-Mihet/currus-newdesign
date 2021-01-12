import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLaptop, faHashtag, faAd, faAngry } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { signout } from '../redux/actions/userActions'
import { changeCurrency } from '../redux/actions/currencyActions'

const Header = () => {

    const dispatch = useDispatch()
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin

    const handleLogout = () => {
      dispatch(signout())
    }

    const handleCurrency = (currency) => {
      dispatch(changeCurrency(currency))
    }


    return (
        <header className="menu">
          <div className="top-menu">
            <div className="rectangle-1">
              <div className="currency">
                <button onClick={() => handleCurrency('USD')}>USD</button>
                <button onClick={() => handleCurrency('CAD')}>CAD</button>
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
                  
                    <Link to="/">
                      <div className="logo"></div>
                    </Link>
                  <div className="search">

                  </div>
                  <nav className="navigation">
                    <ul>
                      <li><Link to="/shop">Shop</Link></li>
                      <li><Link to="/aboutus">About Us</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/faq">FAQ</Link></li>
                      <li><Link to="/dealer">Dealers</Link></li>
                      <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                  </nav>
                  
                  <div className="login_cart">
                    { !userInfo ? (
                    <div><Link to='/login'>Login</Link></div> ) :
                    (
                    <div><Link to='/logout' onClick={handleLogout}>Logout</Link></div>
                    ) }
                    <div><Link to='/cart'>Cart</Link></div>
                  </div>

                </div>
            </div>
        </header>
    )
}

export default Header

