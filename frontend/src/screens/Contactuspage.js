import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs'

const Contactuspage = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')
  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }

    return (
        <>
        <Breadcrumbs />
        <div className="contactus">
            <form onSubmit={handleSubmit}>
                <input id="first" type="text" value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First Name"></input>
                <input id="last" type="text" value={last} onChange={(e) => setLast(e.target.value)} placeholder="Last Name"></input>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"></input>
                <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"></input>
                <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Your Address"></input>
                <input id="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"></input>
                <button type="submit">
                    Buy Now
                </button>
            </form>
        </div>
        </>
    )
}

export default Contactuspage
