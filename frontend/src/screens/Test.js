import React, { useState } from 'react'
import Category from '../components/Category';

const Test = () => {

    const [category1, setCategory1] = useState('E-SCOOTERS')
    const [c1d, setC1d] = useState('nulla id quam varius')
    const [category2, setCategory2] = useState('ACCESSORIES')
    const [c2d, setC2d] = useState('nulla id quam varius')

    return (
        <div>
            <Category title={category1} description={c1d}/>
        </div>
    )
}


export default Test;