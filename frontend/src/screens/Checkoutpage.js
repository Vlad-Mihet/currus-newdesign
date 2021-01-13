import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Checkoutpage = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [company, setCompany] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [town, setTown] = useState('')
    const [state, setState] = useState('')
    const [postcode, setPostcode] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    return (
        <div className="checkout">
            <h2>Billing Details</h2>
            <form>
                <input id="first" type="text" value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First Name"></input>
                <input id="last" type="text" value={last} onChange={(e) => setLast(e.target.value)} placeholder="Last Name"></input>
                <input id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Comapny Name"></input>
                <input id="country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country/Region"></input>
                <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address"></input>
                <input id="town" type="text" value={town} onChange={(e) => setTown(e.target.value)} placeholder="Town/City"></input>
                <input id="state" type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State"></input>
                <input id="postcode" type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="Postcode"></input>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                <input id="phonenumber" type="text" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number"></input>
                <aside>
                    <ul>
                        {cartItems.map(item => (
                        <li>
                            {item.name}{' '}
                            {item.qty}{' '}
                            {item.priceUSD}
                        </li>
                    ))}
                    </ul>
                    <button type="submit">Place Order</button>
                </aside>
            </form>
        </div>
    )
}

export default Checkoutpage
