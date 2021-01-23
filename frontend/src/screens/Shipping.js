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
            <h1>Shipping Information</h1>
            <p>All Domestic United States orders include Free Standard Shipping, excluding Alaska and Hawaii.
                <br />
                <br />
                We do not currently ship internationally. <br />
                <br />
                Your <span>CURRUS</span> will ship from our U.S. Warehouse within 24-48 hours* of your payment clearing. We only ship Monday through Friday. Any in-stock orders placed Friday through Sunday will ship the following Monday or Tuesday.</p>
            </div>
        </div>
        </>
    )
}

export default Shipping
