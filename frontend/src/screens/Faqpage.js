import React, { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs';


const Faqpage = (props) => {
    
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);


  

    return (
        <>
        <Breadcrumbs title={props.location.pathname} />
 

        <div className="sandbox">
            <div className="wrapper">
                <div className={first? "borderleft borderopen": "borderleft borderclosed"}>
                </div>
                <div className="title">
                    What is the shipping cost? (In the USA, Canada and other countries)
                    <button onClick={() => setFirst(!first)}>+</button>
                </div>
                <div className={first? "content open" : "content closed"}>
                    We only ship to the United States. All domestic orders to all locations in Canada &amp; the U.S., exclusing Alaska and Hawaii, include FREE Standard Shipping.
                    <br/>
                    We do not currently ship to international locations.
                </div>
            </div>
            <div className="wrapper">
                <div className={first? "borderleft borderopen": "borderleft borderclosed"}>
                </div>
                <div className="title">
                    Is There A Warranty on Currus Vehicles?
                    <button onClick={() => setFirst(!first)}>+</button>
                </div>
                <div className={first? "content open" : "content closed"}>
                    Yes.
                </div>
            </div>
        </div>
        </>
    )
}

export default Faqpage;
