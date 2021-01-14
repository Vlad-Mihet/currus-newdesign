import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import Reviews from '../components/Reviews'
import { detailsProduct } from '../redux/actions/productActions'

const Productpage = (props) => {

    const dispatch = useDispatch()
    const productId = props.match.params.id
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails;

    const { currency } = useSelector(state => state.currency)

    const handleCart = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

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
            <div>
            {currency === ("CAD") ? product.priceCAD : product.priceUSD}
            </div>
            <div>{product.specification}</div>
            <div>
                qty
                <select value={qty} onChange={e => setQty(e.target.value)}>
                    {
                        [...Array(product.quantity).keys()].map(x => (
                            <option key={x+1} value={x+1}>{x+1}</option>
                        ))
                    }
                </select>
            </div>
            <button onClick={handleCart}>Add To Cart</button>
        </div>
        )}
        </div>
        <Reviews productId={productId} product={product}/>
        </>
    )
}

export default Productpage;
