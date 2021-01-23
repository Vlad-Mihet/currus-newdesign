import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import { Link } from 'react-router-dom'
import { createReturn } from '../redux/actions/returnActions'

const Returnpage = (props) => {

    const dispatch = useDispatch()

    const [submitted, setSubmitted] = useState(false)

    const [vendor, setVendor] = useState('')
    const [action, setAction] = useState('')
    const [sku, setSku] = useState('')
    const [serial, setSerial] = useState('')
    const [quantity, setQuantity] = useState('')
    const [date, setDate] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [order, setOrder] = useState('')
    const [street, setStreet] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [country, setCountry] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
        dispatch(createReturn({ vendor, action, sku, serial, quantity, date, first, last, company, email, phone, order, street, address, city, state, zip, country, message }))

    }

    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div className="return">
            <div id="icontext">
                <div id="icon">
                    <img src="/images/icon1.png"></img>
                </div>
                <div id="text">
                <h1>Canadian Customers: <Link>CLICK HERE for Warranty Contact Information</Link></h1>
                <p>We offer a robust and fair Return Policy but the item must be intact, returned within 14 days of purchase and the customer is required to provide a reason and obtain authorization prior. If what you receive is the wrong item, or it has a defect, or if for any reason you are dissatisfied we will of course provide a refund. You must contact us within 30 days. (Conditions apply). The product must be unused, kept with all accessories and original packaging must be intact. If your shipment was delayed and you no longer require the item, we will refund. Several factors should be weighed before moving forward:</p>
                <ul>
                    <li>
We charge a 10% restocking fee (for unused) &amp; 30% (used) for those who change their minds or refuse a shipment, and will apply that same fee if necessary should we find a returned item used
                    </li>
                    <li>
          All customers must obtain a Return Merchandise Authorization (RMA) code              
                    </li>
                    <li>
              A refund will typically be made within 3 days or so after we receive and inspect it.
          
                    </li>
                </ul>
                <p>Your request can take 24-72 hours to process.</p>
                </div>
            </div>

            <div id="return_box">
            <h1>CURRUS RETURN (RMA) FORM</h1>
            <h4>Fill in all field for return and your request can take 24-72 hours to process</h4>
            { !submitted ? (
            <form className="return_form" onSubmit={handleSubmit}>
                <input id="vendor" type="text" value={vendor} onChange={(e) => setVendor(e.target.value)} placeholder="Currus Vendor *"></input>
                <input id="action" type="text" value={action} onChange={(e) => setAction(e.target.value)} placeholder="Requested Action"></input>
                <input id="sku" type="text" value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU"></input>
                <input id="serial" type="text" value={serial} onChange={(e) => setSerial(e.target.value)} placeholder="Item Serial#"></input>
                <input id="quantity" type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity"></input>
                <input id="date" type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="dd/mm/yyyy"></input>
                <input id="first" type="text" value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First Name"></input>
                <input id="last" type="text" value={last} onChange={(e) => setLast(e.target.value)} placeholder="Last Name"></input>
                <input id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name"></input>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"></input>
                <input id="order" type="text" value={order} onChange={(e) => setOrder(e.target.value)} placeholder="Order Number"></input>
                <input id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street Address"></input>
                <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address"></input>
                <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"></input>
                <input id="state" type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State"></input>
                <input id="zip" type="text" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="zip"></input>
                <input id="country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="country"></input>
                <input id="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message"></input>
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


export default Returnpage