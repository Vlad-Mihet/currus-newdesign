import React, { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useSelector } from 'react-redux'

const Thankyou = () => {



    useEffect(()=> {

    }, [])

    const checkout = useSelector(state => state.checkout)
    const { order } = checkout
   

    return (
        <>
        <Breadcrumbs />
        <div className="thankyou">
            <h1>This is your orderId: { order && order._id } </h1>
        </div>
        </>
    )
}

export default Thankyou
