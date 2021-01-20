import React, { useState } from 'react'

const WhyTheBest = () => {

    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)

    return (
            <div className="whythebest">
                <div className="whycurrus">
                    Why Currus is the best way to get around
                </div>
                <div className="rectangle-24">
                </div>
                <div className="group_64">
                    <div className="group_60">
                        <div className="title">
                            Bringing Green Mobility Revolution is our Passion &amp; We Love Electric Vehicles
                        </div>
                        <button onClick={() => setOne(!one)}>
                            +
                        </button>
                        {one &&
                        <p>
                            We started because we believe driving EV leads to a sustainable future. We are eco-friendly enthusiasts, working agigely to increase usability, awareness among
                            people about electric vehicles. Our e-scooters are just a reflection of our company philosophy and values. To know more, you can
                        </p>
                        }
                    </div>
                    <div className="group_61">
                        <div className="title">
                            We are always Ready to help 24X7 for Free..!!!
                        </div>
                        <button onClick={() => setTwo(!two)}>
                            +
                        </button>
                        { two &&
                        <p>
                            We understand choosing, getting along with an Electric Vehicle (EV) can be confusing for you. If you have any technical queries or issues with the delivered EV
                            to you, talk to our expert technical team available 24x7. Customer satisfaction is all we strive for, right from when we started.
                        </p>
                        }
                    </div>
                    <div className="group_62">
                        <div className="title">
                            Shopping is Convenient, Easy and Hassle-Free..!!
                        </div>
                        <button onClick={() => setThree(!three)}>
                            +
                        </button>
                        { three &&
                        <p>
                            Get best deal &amp; price on your next electric mobility solution.
                        </p>
                        }
                    </div>
                    <div className="group_63">
                        <div className="title">
                            Everything you hate about commuting. Solved..!
                        </div>   
                        <button onClick={() => setFour(!four)}>
                            +
                        </button> 
                        { four &&
                       <p>
                            See detailed product specs, cost, and shipping charges based on your exact location on CURRUS. We also intimate customers about best deals, discount vouchers, coupons,
                            and arrange finance, shipping for their convenience.
                        </p>
                        }             
                    </div>
                </div>

            </div>
    )
}

export default WhyTheBest;
