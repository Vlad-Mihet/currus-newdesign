import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs'

const Dealerpage = () => {


    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [store, setStore] = useState('')
    const [message, setMessage] = useState('')
  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }

    return (
        <>
            <Breadcrumbs />
            <div className="dealer">
            <h1>Currus Dealer Opportunities</h1>
            <p>
                Interested in exploring a business opportunity? We are always looking for dealers. If you see the value in our product and understand its potential, consider selling it yourself.
                We'll provide it to you at our wholesale price and you make a profit by selling it on your website.
                We are more than happy to sit down with you and discuss all the details to help you make your decision.
                Give us a call?
            </p>
            <h1>Tell us about yourself</h1>
            <form onSubmit={handleSubmit}>
                <input id="first" type="text" value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First Name"></input>
                <input id="last" type="text" value={last} onChange={(e) => setLast(e.target.value)} placeholder="Last Name"></input>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"></input>
                <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"></input>
                <input id="store" type="text" value={store} onChange={(e) => setStore(e.target.value)} placeholder="Store Address"></input>
                <input id="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"></input>
                <button type="submit">
                    Buy Now
                </button>
            </form>
            </div>
        </>
    )
}

export default Dealerpage