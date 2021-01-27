import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs'
import { useDispatch } from 'react-redux'
import { createContact } from '../redux/actions/contactActions';

import {Icon, InlineIcon} from '@iconify/react';
import phoneIcon from '@iconify/icons-feather/phone';
import mailIcon from '@iconify/icons-feather/mail';
import clockIcon from '@iconify/icons-feather/clock';

const Contactuspage = (props) => {

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
        <Breadcrumbs title={props.location.pathname} />
        <div className="contactus">
            <div id="wrapper">
            <div id="images">
                <img id="img_one" src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/welcome2.jpeg"></img>
                <img id="img_two" src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/welcome3.jpeg"></img>
                    <div id="group_three">
                        <div className="three_box">
                            <h4>Quick contact</h4>
                            <div className="three_box_flex">
                            <Icon icon={phoneIcon} style={{fontSize: '40px'}} />
                            <div>Call on<br />+180 123 123 123</div>
                            </div>
                        </div>
                        <div className="three_box">
                            <h4>Email Address</h4>
                            <div className="three_box_flex">
                            <Icon icon={mailIcon} style={{fontSize: '40px' }} />
                            <div>Mail to<br />info@currusmotors.com</div>
                            </div>
                        </div>
                        <div className="three_box">
                            <h4>Working hours</h4>
                            <div className="three_box_flex">
                            <Icon icon={clockIcon} style={{fontSize: '40px' }} />
                            <div>We work <br />24/24h 7 days a week</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div id="wearehere">
                <h1>We're here to help you</h1>
                <h4>Contact us in any convenient way and we will answer any questions.</h4>
                { !submitted ? (
                <form id="wearehere_form" className="dealer_form" onSubmit={handleSubmit}>
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
        </div>
        </div>
        </>
    )
}

export default Contactuspage
