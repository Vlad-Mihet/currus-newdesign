import React, { useState, useEffect } from 'react'

const LeftFilter = ({ speed, setSpeed, power, setPower, color, setColor }) => {

    return (
            <div className="shop_leftfilter">
                <div className="shop_leftfilter_max_speed">
                    <h5>Max Speed</h5>
                    <ul>
                        <li>
                            <label>
                                All
                                <input type="checkbox" checked={speed === ''} onChange={() => {
                                    setSpeed('')
                                }}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                50 kmh
                                <input type="checkbox" checked={speed === 50} onChange={() => {
                                    setSpeed(50)
                                }}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                40 kmh
                                <input type="checkbox" checked={speed === 40} onChange={() => {setSpeed(40)}} />
                            </label>
                        </li>
                        <li>
                            <label>
                                30 kmh
                                <input type="checkbox" checked={speed === 30} onChange={() => {setSpeed(30)}} />
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="shop_leftfilter_battery_power">
                    <h5>Battery Power</h5>
                    <ul>
                        <li>
                            <label>
                                All
                                <input type="checkbox" checked={power === ''} onChange={() => {setPower('')}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                30 Ah
                                <input type="checkbox" checked={power === 30} onChange={() => {setPower(30)}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                35 Ah
                                <input type="checkbox" checked={power === 35} onChange={() => {setPower(35)}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                40 Ah
                                <input type="checkbox" checked={power === 40} onChange={() => {setPower(40)}}/>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="shop_leftfilter_color">
                    <h5>Color</h5>
                    <ul>
                        <li>
                            <label>
                                All
                                <input type="checkbox" checked={color === ''} onChange={() => {setColor('')}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Black
                                <input type="checkbox" checked={color === 'black'} onChange={() => {setColor('black')}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Red
                                <input type="checkbox" checked={color === 'red'} onChange={() => {setColor('red')}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Blue
                                <input type="checkbox" checked={color === 'blue'} onChange={() => {setColor('blue')}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Yellow
                                <input type="checkbox" checked={color === 'yellow'} onChange={() => {setColor('yellow')}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Green
                                <input type="checkbox" checked={color === 'green'} onChange={() => {setColor('green')}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                White
                                <input type="checkbox" checked={color === 'white'} onChange={() => {setColor('white')}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                Orange
                                <input type="checkbox" checked={color === 'orange'} onChange={() => {setColor('orange')}}/>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default LeftFilter
