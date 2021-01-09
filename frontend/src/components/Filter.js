import React from 'react'
import { useSelector } from 'react-redux'

const Filter = ({ grid }) => {


    return (
        <div className="filter">
            <div className="filter-result">
                We found products for you
            </div>
            <div>

            </div>
            <div className="filter-categories">
                <select>
                    <option value="E-scooter">E-scooter</option>
                    <option value="something else">something else</option>
                </select>
            </div>
            <div className="filter-sort">
                <select>
                    <option value="lowest">Lowest</option>
                </select>
            </div>
            <div className="gridlist">
                <button onClick={console.log('')}>grid</button>
                <button onClick={console.log('')}>list</button>
            </div>
        </div>
    )
}

export default Filter
