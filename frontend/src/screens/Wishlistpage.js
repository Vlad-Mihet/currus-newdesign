import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import { detailsUser, deleteWishlistItem } from '../redux/actions/userActions'
// import { useHistory, useLocation } from "react-router-dom";


const Wishlistpage = (props) => {

    // const history = useHistory();
    // const location = useLocation();
    const dispatch = useDispatch()

    const userSignIn = useSelector(state => state.userSignin);
    const { userInfo } = userSignIn;

    const userDetail = useSelector(state => state.userDetail);
    const { userInfoDetail } = userDetail;

    const handleCart = (id) => {
        props.history.push(`/cart/${id}?qty=1`)
    }

    const handleDeleteItem = (itemid) => {
        dispatch(deleteWishlistItem(userInfo._id, itemid))
    }

    useEffect(() => {
        dispatch(detailsUser(userInfo._id))  
    }, [dispatch, userDetail, userInfoDetail])

    return (
        <>
        <Breadcrumbs title='Wishlist' />
            <div className="wishlist">
                <div>
                    <table>
                        <colgroup>
                            <col span="1" style={{width: "10%"}} />
                            <col span="1" style={{width: "30%"}} />
                            <col span="1" style={{width: "20%"}} />
                            <col span="1" style={{width: "20%"}} />
                            <col span="1" style={{width: "20%"}} />
                        </colgroup>
                        <tr>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                        {userInfoDetail && userInfoDetail.wishlist.map(item => (
                            <tr className="wishlist_row" key={item._id}>
                                <td><img src={item.image} /></td>
                                <td><div className="wishlist_row_name">{item.name}</div></td>
                                <td><div className="wishlist_row_price">${item.priceUSD}</div></td>
                                <td><button onClick={() => handleCart(item._id)}>Add to cart</button></td>
                                <td><button onClick={() => handleDeleteItem(item._id)} style={{ color: '#E7161B' }}>Remove</button></td>
                            </tr>
                        ))}
                    </table>
                    <div className="wishlist_buttons">
                        <button id="continue">CONTINUE SHOPPING</button>
                        <button id="add">ADD ALL TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlistpage;