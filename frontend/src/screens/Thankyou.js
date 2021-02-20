import React, { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useSelector } from 'react-redux'
import Stepper from 'react-stepper-horizontal'

const Thankyou = (props) => {



    useEffect(()=> {

    }, [])

    const checkout = useSelector(state => state.checkout)
    const { order } = checkout
   

    return (
        <>
       <Breadcrumbs title={props.location.pathname} />
        <div style={{ fontFamily: 'Open Sans' }} className="thankyou">
               <Stepper completeColor="#E7161B" activeColor="#E7161B" activeStep={2} steps={ [{title: 'Shipping Cart'}, {title: 'Checkout'}, {title: 'Order Complete'}] } />
            <h1>This is your orderId: { order && order._id } </h1>
        </div>
        </>
    )
}

export default Thankyou
