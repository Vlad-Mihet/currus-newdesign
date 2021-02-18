import React from 'react'

const RideRiskFree = () => {
    return (
        <div className="rideriskfree">
            <div className="rideriskfree_leftbox">
                <div className="rideriskfree_leftbox_text">
                    Ride Risk Free
                </div>
                <img style={{width: '370px', height: '300px'}}src='images/133.jpg' alt="sideview"></img>
            </div>
            <div className="rideriskfree_rightbox">
                <section id="one">
                    <div className="redcircle" id="redone">   
                        <i className="fas fa-medal"></i>    
                    </div>
                    <div>
                        <h3>Premium quality</h3>
                        <p>When it comes to product design &amp; build quality, all CURRUS e-scooter products are meticulously designed &amp; engineered with the use of high-quality built material.</p>
                    </div>
                </section>
                <section id="two">
                    <div className="redcircle" id="redtwo">     
                        <i className="fas fa-undo-alt"></i>  
                    </div>
                    <div>
                        <h3>Easy returns</h3>
                        <p>We also offer 30-day easy &amp; free returns for all delivered products (conditions apply).</p>
                    </div>
                </section>
                <section id="three">
                    <div className="redcircle" id="redthree">   
                        <i className="fas fa-paper-plane"></i>    
                    </div>
                    <div>
                        <h3>Easy mobility</h3>
                        <p>Our e-scooters makes commuting super comfortable for you, door-to-door travel with zero environmental pollution is our product USP.</p>
                    </div>
                </section>
                <section id="four">
                    <div className="redcircle" id='redfour'>  
                        <i className="fas fa-piggy-bank"></i>     
                    </div>
                    <div>
                        <h3>Cost-saving</h3>
                        <p>You must be surprised to know running an e-vehicle cost less than a penny; no other transportation option comes anywhere to this.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default RideRiskFree
