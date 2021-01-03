import React, { useState } from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'

function Homepage() {

    const [category1, setCategory1] = useState('E-SCOOTERS')
    const [c1d, setC1d] = useState('nulla id quam varius')
    const [category2, setCategory2] = useState('ACCESSORIES')
    const [c2d, setC2d] = useState('nulla id quam varius')

    return (
        <div>
            <Banner />
            <Category title={category1} description={c1d}/>
            <div className="whythebest">
                <div className="whycurrus">
                    Why Currus is the best way to get around
                </div>
                <div className="rectangle-24">
                </div>
                <div className="group_64">
                    <div className="group_60">
                        <div className="rectangle-45">

                        </div>
                        <div className="bringing">
                            Bringing Green Mobility Revolution is our Passion &amp; We Love Electric Vehicles
                        </div>
                        <div className="rectangle-46">

                        </div>
                        <div className="westarted">
                            We started because we believe driving EV leads to a sustainable future. We are eco-friendly enthusiasts, working agigely to increase usability, awareness among
                            people about electric vehicles. Our e-scooters are just a reflection of our company philosophy and values. To know more, you can
                        </div>
                    </div>
                    <div className="group_61">

                    </div>
                    <div className="group_62">

                    </div>
                    <div className="group_63">
                        
                    </div>
                </div>

            </div>

        </div>
    )
}


export default Homepage