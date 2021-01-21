import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import { trackOrder } from '../redux/actions/orderActions'

const Orderpage = (props) => {

    const dispatch = useDispatch()

    const [id, setId] = useState('')
    const [email, setEmail] = useState('')

    const orderDetails = useSelector(state => state.orderDetails)
    const { order } = orderDetails;

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(trackOrder(id))
    }
    
    return (
        <>
            <Breadcrumbs title={props.location.pathname} />
            <div className="order">
                <h1>Order Tracking</h1>
                {!order ? (<form className="order_form" onSubmit={handleSubmit}> 
                    <input placeholder="Order Id" onChange={e => setId(e.target.value)}></input>
                    <input placeholder="Billing Email" onChange={e => setEmail(e.target.value)} ></input>
                    <button type="submit">
                        Track
                    </button>
                </form>) : (
                    <h1>
                        {order.itemsPrice} here is the items price
                    </h1>
                )}
            </div>
        </>
    )
}


export default Orderpage