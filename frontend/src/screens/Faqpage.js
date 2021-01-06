import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';

const Faqpage = () => {

    const clickHandler = () => {
        console.log('clicked')

    }

    return (
        <>
        <Breadcrumbs />
        <div className="faq">
            <section>
                What is the shipping cost (In the USA, Canada and other countries)
                <button onClick={clickHandler}>+</button>
                <p>We only ship to the United States &amp; Canada. ALl domestic orders to all locations in Canada
                    &amp; the U.S., excluding Alaska and Hawaii, include FREE Standard Shipping.
                    We do not currently ship to international locations.
                </p>
            </section>
            <section>
                Is there a Warranty on Currus Vehicles?
                <button onClick={clickHandler}>+</button>
    
            </section>
            <section>
                Can I Get a Test Ride Before Buying?
                <button onClick={clickHandler}>+</button>
    
            </section>
            <section>
                How Do I Order Wholesale?
                <button onClick={clickHandler}>+</button>
    
            </section>
            <section>
                How often does this need servicing in a year?
                <button onClick={clickHandler}>+</button>
    
            </section>
            <section>
                Is there any age restriction to Order the Electric Scooter?
                <button onClick={clickHandler}></button>
            </section>
            <section>
                Is case of damage, where I do get spare parts for the scooter?
                <button onClick={clickHandler}></button>
            </section>
        </div>
        </>
    )
}

export default Faqpage;
