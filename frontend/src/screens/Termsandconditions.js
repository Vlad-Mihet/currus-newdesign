import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const Termsandconditions = (props) => {
    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div className="terms">
            <h1>Terms and Conditions</h1>
            <p>
The subsequent terms and conditions or “Terms of Use” constitute a legally binding agreement between you and the company. You are advised to read all the terms carefully given as it might have an impact on your legal rights and responsibilities.

We own the right, at our sole discretion, to make changes, modifications or otherwise alter these terms from time to time without notice. It is your sole responsibility to review this page from time to time.

If you purchase a product or place an order from our website, you will be bound to all our Terms (which include Privacy Policy).
            </p>
            <h1>By placing an order on our site you agree that:</h1>
            <p>
All information you provide is accurate &amp; true to the best of your knowledge.<br/>
You consent or agree to the collection, usage &amp; disclosure of information you provide via: terms in our Privacy Policy.
            </p>
            <h1>Product Availability</h1>
            <p>
We do not guarantee that all listed products or accessories on our site will be available for delivery immediately as this will depend on our current inventory.
            </p>
            <h1>Ownership of Products</h1>
            <p>
  Any risk related to the possibility of theft or damage to your product will be borne by you once it has been delivered.              
            </p>
        </div>
        </>
    )
}

export default Termsandconditions
