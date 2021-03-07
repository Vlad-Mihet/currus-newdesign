import React, { useState, useEffect } from 'react'

const Breadcrumbs = (props) => {

    const [t, setT] = useState('');

    const [arr, setArr] = useState([]);

    useEffect(() => {
        setT(props.title.slice(1).toUpperCase())
        setArr(t.split("/"))
    }, [props]);

    if(!props) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="breadcrumbs">
            <div className="homeshop">
                {`HOME / ${props.title}`}
            </div>
        </div>
    )
}

export default Breadcrumbs;
