import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import Reviews from '../components/Reviews'
import { detailsProduct } from '../redux/actions/productActions'

const Productpage = (props) => {

    const dispatch = useDispatch()
    const productId = props.match.params.id

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])

    return (
        <>
        <Breadcrumbs />
        <div className="product_detail">
        { product && (
        <div>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.specification}</div>
        </div>
        )}
        </div>
        <Reviews />
        </>
    )
}

export default Productpage;
