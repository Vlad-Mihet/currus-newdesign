import React, { useEffect } from 'react'
import { addToCart } from '../actions/cartActions'

const Cartpage = (props) => {


    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <div>

            </div>
        </div>
    )
}

export default Cartpage;
