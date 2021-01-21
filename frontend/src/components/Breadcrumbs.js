import React, { useState, useEffect } from 'react'

const Breadcrumbs = (props) => {

    const [t, setT] = useState('');



    useEffect(() => {
        setT(props.title.slice(1).toUpperCase())
    }, [props]);

    if(!props) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="breadcrumbs">
            <div className="homeshop">
                {`HOME / ${t}`}
            </div>
        </div>
    )
}

export default Breadcrumbs;
