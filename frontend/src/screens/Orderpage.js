import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../components/Breadcrumbs";
import { resetOrder, trackOrder } from "../redux/actions/orderActions";

const Orderpage = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(trackOrder(id));
  };

  useEffect(() => {
    dispatch(resetOrder());
  }, []);

  return (
    <>
      <Breadcrumbs title={props.location.pathname} />
      <div className="order">
        <h1>Order Tracking</h1>
        {error && <h5>CAN NOT FIND</h5>}
        {!order ? (
          <form className="order_form" onSubmit={handleSubmit}>
            <input
              placeholder="Order Id"
              onChange={(e) => setId(e.target.value)}></input>
            <input
              placeholder="Billing Email"
              onChange={(e) => setEmail(e.target.value)}></input>
            <button type="submit">Track</button>
          </form>
        ) : (
          <p>{order.itemsPrice} here is the items price</p>
        )}
      </div>
    </>
  );
};

export default Orderpage;
