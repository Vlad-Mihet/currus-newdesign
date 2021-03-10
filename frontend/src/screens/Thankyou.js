import React, { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useSelector } from 'react-redux'
import Stepper from 'react-stepper-horizontal'
import { Link } from 'react-router-dom';

const Thankyou = (props) => {



    useEffect(()=> {

    }, [])

    const checkout = useSelector(state => state.checkout)
    const { order } = checkout
   

    return (
        <>
       <Breadcrumbs title={props.location.pathname} />
        <div className="thankyou">
            <Stepper completeColor="#E7161B" activeColor="#E7161B" activeStep={2} steps={ [{title: 'Shipping Cart'}, {title: 'Checkout'}, {title: 'Order Complete'}] } />
            <div className="thankyou_check">
                <i className="fas fa-check"></i>
            </div>
            <div className="thankyou_complete">ORDER COMPLETE</div>
            <div className="thankyou_purchase">Thank You For Your Purchase</div>
            <div className="thankyou_number">Order No: { order && order._id } </div>
            <button className="thankyou_button">
                <Link to='/shop'>CONTINUE SHOPPING</Link>
            </button>
        </div>
        </>
    )
}

export default Thankyou
