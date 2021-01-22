import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const Termsandconditions = (props) => {
    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div className="terms">
            <h1>Terms and Conditions</h1>

            <h1>By placing an order on our site</h1>
        </div>
        </>
    )
}

export default Termsandconditions
