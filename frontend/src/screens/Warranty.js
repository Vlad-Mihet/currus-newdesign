import React, { useState } from 'react'

const Warranty = () => {

    const [submitted, setSubmitted] = useState(false)

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [order, setOrder] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [country, setCountry] = useState('')
    const [model, setModel] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
    }

    return (
        <div className="warranty">
            <h1>Registration Form</h1>
            <p>Please take a moment to register your product with us. Send registration form by mail or electronically.</p>

            { !submitted ? (
            <form className="affiliate_form" onSubmit={handleSubmit}>
                <input id="first" type="text" value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First Name"></input>
                <input id="last" type="text" value={last} onChange={(e) => setLast(e.target.value)} placeholder="Last Name"></input>
                <input id="order" type="text" value={order} onChange={(e) => setOrder(e.target.value)} placeholder="Order Number"></input>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"></input>
                <input id="date" type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="dd.mm.yyyy"></input>
                <input id="address1" type="text" value={address1} onChange={(e) => setAddress1(e.target.value)} placeholder="Address 1"></input>
                <input id="address2" type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Address 2"></input>
                <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"></input>
                <input id="state" type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State"></input>
                <input id="zip" type="text" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="Zip"></input>
                <input id="country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country"></input>
                <input id="model" type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model Number"></input>
                <input id="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"></input>
                <button type="submit">
                    Submit
                </button>
            </form>
            ) : <h2>Thanks for your submission.</h2>}
        </div>
    )
}

export default Warranty;
