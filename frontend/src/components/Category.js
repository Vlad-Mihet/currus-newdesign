import React from 'react'

function Category(props) {


    return (
        <div className="category_page">
            <section id="section_one">
                <div className="category_border">
                    <div className="category_title">
                        E-SCOOTERS
                    </div>
                    <div className="category_description">
                        Nulla id quarm varius
                    </div>
                    <div className="category_flex">
                        <div className="category_circle">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className="category_shopnow">
                            SHOP NOW
                        </div>
                    </div>
                </div>
                <div>
                    <img src="images/helmet2.png"/>
                </div>
            </section>
            <section id="section_two">
                <div className="category_border">
                    <div className="category_title">
                        Accessories
                    </div>
                    <div className="category_description">
                        Nulla id quarm varius
                    </div>
                    <div className="category_flex">
                        <div className="category_circle">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className="category_shopnow">
                            SHOP NOW
                        </div>
                    </div>
                </div>
                <div>
                    <img src="images/helmet1.png" />
                </div>
            </section>
        </div>       
    )
}

export default Category
