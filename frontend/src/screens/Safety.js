import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';

const Safety = (props) => {
    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div className="safety">
            <p>
            It can be great fun to ride an e-scooter but it doesn’t come without potential hazard. You always want to be awake, aware and alert to be safe; respect road signs, travel at modest speeds and stay in your lane! It goes without saying that you should never ride on a highway and so we strongly recommend a helmet or protective head gear.
            </p>
            <div id="icontext">
                <div id="icon">
                    <img src="/images/safety.png"></img>
                </div>
                <div id="text">
                <h1>Charging Battery</h1>
                <p>Use care when you are charging your device and be sure to monitor. Never leave it plugged into an outlet overnight or if you are away from home and never try to charge it when your scooter is wet. Here are some other tips:</p>
                <ul>
                    <li>Always follow the manufacturer’s instructions</li>
                    <li>Only use the certified charger designed for your device</li>
                    <li>Only use the charging cord that came with the device</li>
                    <li>Never charge a device under anything can catch fire</li>
                    <li>Never allow batteries to get wet</li>
                    <li>Store batteries at room temperature &amp; never in direct sunlight or by heat sources such as a laptop or radiator</li>
                    <li>Store &amp; charge your scooter away from anything that could catch fire (such as paper)</li>
                    <li>Avoid overheating your batteries by unplugging your charger as soon as it finishes</li>
                    <li>If you ever see signs of your battery overheating, releasing an odor or a leak or reveal changes in color, shut off your device immediately &amp; isolate it</li>
                </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Safety;
