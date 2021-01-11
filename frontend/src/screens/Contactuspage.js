import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs'
import { useDispatch } from 'react-redux'
import { createContact } from '../redux/actions/contactActions';

const Contactuspage = () => {

    const dispatch = useDispatch()

    const [firstname, setFirst] = useState('')
    const [lastname, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhone] = useState('')
    const [address, setStore] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
  

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(!submitted)
        dispatch(createContact({ firstname, lastname, email, phonenumber, address, message }))
    }

    return (
        <>
        <Breadcrumbs />
        <div className="contactus">
            { !submitted ? (
            <form onSubmit={handleSubmit}>
                <input id="firstname" type="text" value={firstname} onChange={(e) => setFirst(e.target.value)} placeholder="First Name"></input>
                <input id="lastname" type="text" value={lastname} onChange={(e) => setLast(e.target.value)} placeholder="Last Name"></input>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"></input>
                <input id="phonenumber" type="text" value={phonenumber} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"></input>
                <input id="address" type="text" value={address} onChange={(e) => setStore(e.target.value)} placeholder="Your Address"></input>
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

export default Contactuspage
