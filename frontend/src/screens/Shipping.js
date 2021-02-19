import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const Shipping = (props) => {
    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div className="shipping">
 
            <div className="shipping_text">
                <h1>Shipping Policy</h1>
                <p>All Domestic United States orders include Free Standard Shipping, excluding Alaska and Hawaii.
                    <br />
                    <br />
                    We do not currently ship internationally. <br />
                    <br />
                    Your <span>CURRUS</span> will ship from our U.S. Warehouse within 24-48 hours* of your payment clearing. We only ship Monday through Friday. Any in-stock orders placed Friday through Sunday will ship the following Monday or Tuesday.</p>
                <div className="shipping_text_questions">
                    <div className="shipping_text_questions_circle">
                        <i className="fas fa-question"></i>
                    </div>
                    <div>
                        <h6>Have more questions? </h6>
                        <p>Feel free to contact at any time and our customer support will answer any questions. We work 24 hours, every day of the week.</p>
                        <div id="shipping_phone">+1 80 <span>123 123 123</span></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Shipping
