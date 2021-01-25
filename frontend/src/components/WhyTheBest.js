import React, { useState } from 'react'
import Faq from 'react-faq-component'

const WhyTheBest = () => {

    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)

    const data = {
    
        rows: [
            {
                title: "Bringing Green Mobility Revolution is our Passion & We Love Electric Vehicles",
                content: "We started because we believe driving EV leads to a sustainable future. We are eco-friendly enthusiasts, working agigely to increase usability, awareness among people about electric vehicles. Our e-scooters are just a reflection of our company philosophy and values. To know more, you can",
            },
            {
                title: "We are always Ready to help 24X7 for Free..!!!",
                content: "We understand choosing, getting along with an Electric Vehicle (EV) can be confusing for you. If you have any technical queries or issues with the delivered to you, talk to our expert technical team available 24x7. Customer satisfaction is all we strive for, right from when we started."
            },
            {
                title: "Shopping is Convenient, Easy and Hassle-Free..!!",
                content: "blah blah blah"
            },
            {
                title: "Everything you hate about commuting. Solved..!",
                content: "blah blah blah"
            }
        ]
    }

    const styles = {

    }

    return (
            <div className="whythebest">
                <div className="whycurrus">
                    Why Currus is the best way to get around
                </div>
  
                <div id="grid">
                    <div id="homefaq">
                        <Faq data={data} />
                    </div>
                    <div id="image">
                        <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/redcircles.png" />
                    </div>
                </div>

            </div>
    )
}

export default WhyTheBest;
