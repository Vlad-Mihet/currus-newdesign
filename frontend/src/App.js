import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import Header from './components/Header'
import Footer from './components/Footer'

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
            <Route path="/blog" component={Bloglistpage} exact></Route>
            <Route path="/blog/:id" component={Blogpage}></Route>
            <Route path="/faq" component={Faqpage} exact></Route>
            <Route path="/dealer" component={Dealerpage} exact></Route>
            <Route path="/contactus" component={Contactuspage} exact></Route>
            <Route path="/privacypolicy" component={Privacypage}></Route>
            <Route path="/termsandconditions" component={Termsandconditions}></Route>
            <Route path="/test" component={Test}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
