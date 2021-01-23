import React, { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const Affiliate = (props) => {

    const [submitted, setSubmitted] = useState(false)

    const [firstname, setFirst] = useState('')
    const [lastname, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhone] = useState('')
    const [storeaddress, setStore] = useState('')
    const [concern, setConcern] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
    }

    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div className="affiliate">
            <div id="icontext">
                <div id="icon">
                    <img src="/images/affiliatelogo.png"></img>
                </div>
                <div id="text">
                    <h1>Currus Affiliate Program</h1>
                    <p>If you are not in a position to sell our product directly as part of your business venture,</p>
                </div>
            </div>

            <div id="affiliate_box">
                        <h1>Be part of the Currus Affiliate Program</h1>
                        <p>Please tell us about yourself.</p>         
                { !submitted ? (
                <form id="affiliate_form" onSubmit={handleSubmit}>
                    <input id="firstname" type="text" value={firstname} onChange={(e) => setFirst(e.target.value)} placeholder="First Name"></input>
                    <input id="lastname" type="text" value={lastname} onChange={(e) => setLast(e.target.value)} placeholder="Last Name"></input>
                    <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"></input>
                    <input id="phonenumber" type="text" value={phonenumber} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"></input>
                    <input id="ineedhelp" type="text" value={storeaddress} onChange={(e) => setStore(e.target.value)} placeholder="I Need Help With..."></input>
                    <input id="concern" type="text" value={concern} onChange={(e) => setConcern(e.target.value)} placeholder="Tell Us a Little More About Your Concern..."></input>
                    <input id="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"></input>
                    <button type="submit">
                        Submit
                    </button>
                </form>
                ) : <h2>Thanks for your submission.</h2>}
            </div>
        </div>
        </>
    )
}

export default Affiliate;
