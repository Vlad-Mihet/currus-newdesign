import React, { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux'



const Blogpage = (props) => {

    const dispatch = useDispatch()
    const blogId = props.match.params.id


    

  

    return (
        <>
        <Breadcrumbs title={props.location.pathname} />
        <div className="blog_page">
            <h1>welcome to {blogId}</h1>

        </div>
        </>
    )
}

export default Blogpage;