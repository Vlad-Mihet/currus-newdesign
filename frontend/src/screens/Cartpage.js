import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart, applyCoupon, saveShipping, saveTotal, saveCoupon, saveSubtotal, removeOneFromCart } from '../redux/actions/cartActions'
import Stepper from 'react-stepper-horizontal'
import Breadcrumbs from '../components/Breadcrumbs'

const Cartpage = (props) => {

    const dispatch = useDispatch()
    const [shipping, setShipping] = useState(false)
    const [coupon, setCoupon] = useState(1)
    const [code, setCode] = useState('')
    const [applied, setApplied] = useState(false)
    const [shippingPrice, setShippingPrice] = useState(0)

    
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const itemsPrice = cartItems.reduce((a, c) => a + c.priceUSD * c.qty, 0)
    const afterCouponPrice = Math.round(itemsPrice * coupon)

    const totalPrice = afterCouponPrice + shippingPrice

  

  

    const handleCoupon = () => {
        if (applied === false) {
            setApplied(true)
            setCoupon(coupon*0.8)
            dispatch(applyCoupon())
        }
    }

    const handleCheckout = () => {
        dispatch(saveShipping(shippingPrice))
        dispatch(saveCoupon(afterCouponPrice))
        dispatch(saveSubtotal(itemsPrice))
        dispatch(saveTotal(totalPrice))
        props.history.push('/checkout')
    }

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    const handlePlus = (id) => {
        dispatch(addToCart(id, 1))
    }

    const handleMinus = (id) => {
        dispatch(removeOneFromCart(id))
    }

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    return (
        <>
        <Breadcrumbs title={props.location.pathname} />
        <div className="cart">
            <Stepper steps={ [{title: 'Shipping Cart'}, {title: 'Checkout'}, {title: 'Order Complete'}] } />
            <div id="gridbox">
            <div id="box1">
                <ul>
                    { cartItems.length === 0 ? <h2>Cart is Empty</h2> : (
                        cartItems.map(item => (
                            <li key={item.id}>
                                <img style={{ width: '75px', height: '75px' }} src={item.image}></img>
                                <div>{item.name}{' '}</div>
                                <div>{item.priceUSD}</div>
                               <div>
                                   <button onClick={() => handleMinus(item.id)}>-</button>
                                   {item.qty}{' '}
                                   <button onClick={() => handlePlus(item.id)}>+</button>
                               </div>
                                <div>{item.priceUSD * item.qty}</div>
                                <button onClick={() => handleRemove(item.id)}>X</button>
                            </li>
                        )
                    ))}
                </ul>
                <div id="row">
                    <div>
                        { !applied ? (
                        <>
                        <input onChange={(e) => setCode(e.target.value)} placeholder="Coupon Code">     
                        </input>
                        <button onClick={handleCoupon}>Apply Coupon</button>
                        </>
                        ) : (<h5>Coupon Applied</h5>)}
                    </div>
                    
                    <div>
                        <Link to='/shop'>Continue Shopping</Link>
                    </div>
                </div>
            </div>
            <div id="box2">
                <h1>Cart Totals</h1>
                <h4>
                ${itemsPrice}
                </h4>
                <h1>After Coupon Applied</h1>
                <h4>
                ${afterCouponPrice}
                </h4>
                <h4>
                    <label>
                        Free shipping
                        <input name="free" type="checkbox" value="free" checked={!shipping} onChange={() => {
                            setShipping(!shipping)
                            setShippingPrice(0)}} />
                    </label>
                    <label>
                        Shipping to CA
                        <input name="paid" type="checkbox" value="paid" checked={shipping} onChange={() => {
                            setShipping(!shipping)
                            setShippingPrice(100)}} />
                    </label>
                    { shipping && <h1>$100</h1>}
                </h4>
                <h1>Total</h1>
                <h4>
                ${totalPrice}
                </h4>
                <div>
                        <button type="button" onClick={handleCheckout} disabled={cartItems.length === 0}>
                            Proceed to Checkout
                        </button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Cartpage;
