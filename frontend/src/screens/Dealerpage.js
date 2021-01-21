import { diskStorage } from 'multer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import { createDealer } from '../redux/actions/dealerActions';

const Dealerpage = (props) => {


    const dispatch = useDispatch()

    const [firstname, setFirst] = useState('')
    const [lastname, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhone] = useState('')
    const [storeaddress, setStore] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
  

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(!submitted)
        dispatch(createDealer({ firstname, lastname, email, phonenumber, storeaddress, message }))
    }

    return (
        <>
            <Breadcrumbs title={props.location.pathname} />
            <div className="dealer">
            <h1>Currus Dealer Opportunities</h1>
            <p>
                Interested in exploring a business opportunity? We are always looking for dealers. If you see the value in our product and understand its potential, consider selling it yourself.
                We'll provide it to you at our wholesale price and you make a profit by selling it on your website.
                We are more than happy to sit down with you and discuss all the details to help you make your decision.
                Give us a call?
            </p>
            <h1>Tell us about yourself</h1>
            { !submitted ? (
            <form className="dealer_form" onSubmit={handleSubmit}>
                <input id="firstname" type="text" value={firstname} onChange={(e) => setFirst(e.target.value)} placeholder="First Name"></input>
                <input id="lastname" type="text" value={lastname} onChange={(e) => setLast(e.target.value)} placeholder="Last Name"></input>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"></input>
                <input id="phonenumber" type="text" value={phonenumber} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"></input>
                <input id="storeaddress" type="text" value={storeaddress} onChange={(e) => setStore(e.target.value)} placeholder="Store Address"></input>
                <input id="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"></input>
                <button type="submit">
                    Buy Now
                </button>
            </form>
            ) : <h2>Thanks for your submission.</h2>}
            </div>
        </>
    )
}

export default Dealerpage