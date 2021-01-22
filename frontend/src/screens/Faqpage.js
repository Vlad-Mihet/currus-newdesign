import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import Faq from 'react-faq-component'

const Faqpage = (props) => {

    const data = {
        title: "",
        rows: [
            {
                title: "What is the shipping cost",
                content: "We started because we believe driving EV leads to a sustainable future. We are eco-friendly enthusiasts, working agigely to increase usability, awareness among people about electric vehicles. Our e-scooters are just a reflection of our company philosophy and values. To know more, you can",
            },
            {
                title: "Is there a Warranty on Currus Vehicles",
                content: "We understand choosing, getting along with an Electric Vehicle (EV) can be confusing for you. If you have any technical queries or issues with the delivered to you, talk to our expert technical team available 24x7. Customer satisfaction is all we strive for, right from when we started."
            }
        ]
    }
  

    return (
        <>
        <Breadcrumbs title={props.location.pathname} />
        <div className="faq">
            <Faq data={data} />
        </div>
        </>
    )
}

export default Faqpage;
