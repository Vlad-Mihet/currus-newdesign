import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Breadcrumbs from "../components/Breadcrumbs";
import { createWarranty } from "../redux/actions/warrantyActions";

const Warranty = (props) => {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [order, setOrder] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [model, setModel] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    dispatch(
      createWarranty({
        first,
        last,
        order,
        email,
        phone,
        date,
        address1,
        address2,
        city,
        state,
        zip,
        country,
        model,
        message,
      }),
    );
  };

  return (
    <>
      <Breadcrumbs title={`${props.location.pathname}`} />
      <div className="warranty">
        <div id="icontext">
          <div id="text">
            <h1>Warranty and Registration</h1>
            <p>
              To qualify for a warranty it is imperative you keep your original
              receipts and documents. We offer a 12-month limited warranty that
              covers the original purchase should any defects or problems result
              from normal use of your scooter. These 12 months are from the date
              of purchase. But we also offer 12 months of free technical
              support. That support includes any repairs, spare parts or other
              service needs. We also offer a six-month warranty for used
              certified items. (Unfortunately we cannot offer a warranty for
              items modified by customers).
              <br />
              <br />
              <span>
                Our warranties do not cover physical damage resulting from a
                road accident so travel smart and stay safe.
              </span>
            </p>
          </div>
        </div>

        <div id="warranty_box">
          <h1>Registration Form</h1>
          <p>
            Please take a moment to register your product with us. Send
            registration form by mail or electronically.
          </p>
          {!submitted ? (
            <form id="warranty_form" onSubmit={handleSubmit}>
              <div className="three_row">
                <input
                  id="first"
                  type="text"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  placeholder="First Name"></input>
                <input
                  id="last"
                  type="text"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                  placeholder="Last Name"></input>
                <input
                  id="order"
                  type="text"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  placeholder="Order Number"></input>
              </div>
              <div className="three_row">
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"></input>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"></input>
                <input
                  id="date"
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="dd.mm.yyyy"></input>
              </div>
              <div className="two_row">
                <input
                  id="address1"
                  type="text"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  placeholder="Address 1"></input>
                <input
                  id="address2"
                  type="text"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  placeholder="Address 2"></input>
              </div>
              <div className="four_row">
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"></input>
                <input
                  id="state"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State"></input>
                <input
                  id="zip"
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="Zip"></input>
                <input
                  id="country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"></input>
              </div>
              <input
                className="one_row"
                id="model"
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Model Number"></input>
              <input
                className="one_row"
                id="message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"></input>
              <button type="submit">SUBMIT</button>
            </form>
          ) : (
            <h2>Thanks for your submission.</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Warranty;
