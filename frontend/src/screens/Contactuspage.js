import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch } from "react-redux";
import { createContact } from "../redux/actions/contactActions";

import { Icon, InlineIcon } from "@iconify/react";
import phoneIcon from "@iconify/icons-feather/phone";
import mailIcon from "@iconify/icons-feather/mail";
import clockIcon from "@iconify/icons-feather/clock";

const Contactuspage = (props) => {
  const dispatch = useDispatch();

  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [address, setStore] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
    dispatch(
      createContact({
        firstname,
        lastname,
        email,
        phonenumber,
        address,
        message,
      }),
    );
  };

  return (
    <>
      <Breadcrumbs title={props.location.pathname} />
      <div className="contactus">
        <div id="wrapper_weare">
          <div id="wearehere">
            <h1>Get Free Estimate</h1>
            <p>
              Contact us in any convenient way and we will answer any questions.
            </p>
            {!submitted ? (
              <form
                id="wearehere_form"
                className="dealer_form"
                onSubmit={handleSubmit}>
                <input
                  id="firstname"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirst(e.target.value)}
                  placeholder="First Name"></input>
                <input
                  id="lastname"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLast(e.target.value)}
                  placeholder="Last Name"></input>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"></input>
                <input
                  id="phonenumber"
                  type="text"
                  value={phonenumber}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"></input>
                <input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setStore(e.target.value)}
                  placeholder="Your Address"></input>
                <input
                  id="message"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"></input>
                <button type="submit">GET IN TOUCH</button>
              </form>
            ) : (
              <h2>Thanks for your submission.</h2>
            )}
          </div>

          <div id="wearehere_right">
            <img src="images/2.jpeg" alt="scooter"></img>
          </div>
        </div>

        <div className="contact_icons">
          <div className="contact_icons_box">
            <div className="contact_icons_box_circle">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div>
              <div className="contact_icons_top">Phone</div>
              <div className="contact_icons_bottom">+180 123 123 123</div>
            </div>
          </div>
          <div className="contact_icons_box">
            <div className="contact_icons_box_circle">
              <i className="fas fa-at"></i>
            </div>
            <div>
              <div className="contact_icons_top">Email Address</div>
              <div className="contact_icons_bottom">info@currusmotors.com</div>
            </div>
          </div>
          <div className="contact_icons_box">
            <div className="contact_icons_box_circle">
              <i className="fas fa-clock"></i>
            </div>
            <div>
              <div className="contact_icons_top">Working Hours</div>
              <div className="contact_icons_bottom">
                24 hours, 7 days a week
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactuspage;
