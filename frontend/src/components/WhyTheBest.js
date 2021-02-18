import React, { useState } from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import minusIcon from '@iconify/icons-feather/minus';
import plusIcon from '@iconify/icons-feather/plus';


const WhyTheBest = () => {

    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);


    return (
            <div className="whythebest">

  
                <div id="grid">
                    <div id="image">
                        <img style={{ width: '400px', height: '600px' }} src="images/fronttext.png"></img>
                    </div>
                    <div className="sandbox">
                        <div>Why Currus is the best way to get around</div>
                        <div className="wrapper">
                            <div className={first? "borderleft borderopen": "borderleft borderclosed"}>
                            </div>
                            <div className="title">
                                What is the shipping cost? (In the USA, Canada and other countries)
                                <div className="icon" onClick={() => setFirst(!first)}>
                                    {first ?
                                    <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                                    <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                                    }
                                </div>
                            </div>
                            <div className={first? "content open" : "content closed"}>
                                We only ship to the United States. All domestic orders to all locations in Canada &amp; the U.S., exclusing Alaska and Hawaii, include FREE Standard Shipping.
                                <br/>
                                We do not currently ship to international locations.
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className={second? "borderleft borderopen": "borderleft borderclosed"}>
                            </div>
                            <div className="title">
                                Is There A Warranty on Currus Vehicles?
                                <div className="icon" onClick={() => setSecond(!second)}>
                                    {second ?
                                    <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                                    <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                                    }
                                </div>
                            </div>
                            <div className={second? "content open" : "content closed"}>
                                Yes. We offer a 12-month limited warranty from the date of purchase. The warranty covers any defects or problems that may result from the normal use of the scooter. In addition to 12 months product warranty, we also offer 12 months of free technical support for any repairs, spare parts or any other service you may need during the period.
                                <br/>
                                For used certified items, we offer a six-month warranty.
                                <br/>
                                The warranty will not be applicable to items modified by customers. Physical damages to the vehicle resulting from an accident are also not covered under the warranty.
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className={third? "borderleft borderopen": "borderleft borderclosed"}>
                            </div>
                            <div className="title">
                                Can I Get a Test Ride Before Buying?
                                <div className="icon" onClick={() => setThird(!third)}>
                                    {third ?
                                    <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                                    <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                                    }
                                </div>
                            </div>
                            <div className={third? "content open" : "content closed"}>
                                No. We do not offer test rides as of now, as we only have online stores. However, we are working to make partners with physical stores across the USA and might soon allow customers to test ride before buying from one of the Currus-authorised stores.
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className={fourth? "borderleft borderopen": "borderleft borderclosed"}>
                            </div>
                            <div className="title">
                                How Do I Order Wholesale?
                                <div className="icon" onClick={() => setFourth(!fourth)}>
                                    {fourth ?
                                    <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                                    <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                                    }
                                </div>
                            </div>
                            <div className={fourth? "content open" : "content closed"}>
                                If you’d like to become a dealer and resell our products through your own website or physical store, we can provide you these items at wholesale prices. If you want to order wholesale for any other reason, we might be able to help you with discounts.
                                <br/>
                                To know about our wholesale price or to discuss the details, give us a call or send an enquiry.
                            </div>
                        </div>             
                    </div>
                </div>

            </div>
    )
}

export default WhyTheBest;
