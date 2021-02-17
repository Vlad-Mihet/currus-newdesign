import React, { useState, useEffect } from 'react'

const LeftFilter = () => {

    return (
            <div className="shop_leftfilter">
                <div className="shop_leftfilter_categories">
                    <h5>Categories</h5>
                    <ul>
                        <li>
                            All Products
                        </li>
                        <li>
                            e-Scooters
                        </li>
                        <li>
                            Accessories
                        </li>
                    </ul>
                </div>
                <div className="shop_leftfilter_max_speed">
                    <h5>Max Speed</h5>
                    <ul>
                        <li>
                            <label>
                                50 kmh
                                <input type="checkbox"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                40 kmh
                                <input type="checkbox"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                30 kmh
                                <input type="checkbox"/>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="shop_leftfilter_battery_power">
                    <h5>Battery Power</h5>
                    <ul>
                        <li>
                            <label>
                                30 Ah
                                <input type="checkbox"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                35 Ah
                                <input type="checkbox"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                40 Ah
                                <input type="checkbox"/>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="shop_leftfilter_color">
                    <h5>Color</h5>
                    <ul>
                        <li>
                            <label>
                                Black
                                <input type="checkbox"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Red
                                <input type="checkbox"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Blue
                                <input type="checkbox"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Yellow
                                <input type="checkbox"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Green
                                <input type="checkbox"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                White
                                <input type="checkbox"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Orange
                                <input type="checkbox"/>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default LeftFilter
