import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const Shipping = (props) => {
    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div className="shipping">
            <div id="icon">
                <img src="/images/icon1.png"></img>
            </div>
            <div id="text">
            <h1>Shipping</h1>
            <h4>All Domestic United States orders include Free Standard Shipping</h4>
            </div>
        </div>
        </>
    )
}

export default Shipping
