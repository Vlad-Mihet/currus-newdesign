import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';

const Safety = (props) => {
    return (
        <>
        <Breadcrumbs title={`${props.location.pathname}`} />
        <div className="safety">
            <h1>Safety</h1>
            <p>It can be great fun to ride an e-scooter but it doesn't come without potential hazard.</p>
        </div>
        </>
    )
}

export default Safety;
