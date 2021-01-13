import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const Orderpage = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
        <>
            <Breadcrumbs />
            <div className="order">
                <h1>Order Tracking</h1>

                <form className="order_form" onSubmit={handleSubmit}> 
                    <input placeholder="Order Id"></input>
                    <input placeholder="Billing"></input>
                    <button type="submit">
                        Track
                    </button>
                </form>
            </div>
        </>
    )
}


export default Orderpage