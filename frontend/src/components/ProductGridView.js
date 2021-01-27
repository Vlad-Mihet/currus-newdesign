import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon } from 'react-share';
import Modal from 'react-modal'
import { Icon, InlineIcon } from '@iconify/react';
import shoppingCart from '@iconify/icons-feather/shopping-cart';
import share2 from '@iconify/icons-feather/share-2';

const ProductGridView = (props) => {

    const { currency } = useSelector(state => state.currency)
    const { grid, product } = props;

    const [m, setM] = useState(false);

    const handleCart = () => {
        props.history.push(`/cart/${product._id}?qty=1`)
    }

    const openModal = () => {
        setM(true);
    }

    const closeModal = () => {
        setM(false);
    }

    return (
        <div className={grid ? "product_gridview" : "product_listview"}>
            <div id="grid_border">
            <Link to={`/product/${product._id}`}>
                <img src={product.image}/>
            </Link>
                <>
                {product.onSale && (
                <div className="sale">
                    <div id="sale_text">
                        Sale
                    </div>
                </div>)}
                </>
                {grid && (
                <div className="cartshare">
                    <div className="carticon" onClick={handleCart}>
                        <Icon icon={shoppingCart} style={{fontSize: '12px'}} />&nbsp;&nbsp;Add To Cart
                    </div>
                    <div className="shareicon" onClick={openModal}>
                        | &nbsp; <Icon icon={share2} style={{fontSize: '12px' }} />
                    </div>
                </div>
                )}
                
                

                <Modal isOpen={m} onRequestClose={closeModal}>
                    <FacebookShareButton url="www.google.com">
                        <FacebookIcon size={36} />
                    </FacebookShareButton>
                    <EmailShareButton url="www.google.com">
                        <EmailIcon size={36} />
                    </EmailShareButton>
                    <TwitterShareButton url="www.google.com">
                        <TwitterIcon size={36} />
                    </TwitterShareButton>
                </Modal>
            </div>
            <div className="name_price">
            <div className="product_name">
            {product.name}
            </div>
            <div className="product_price">
            $ {currency === ("CAD") ? product.priceCAD : product.priceUSD }
            </div>
            {
            !grid && (<>
                <p className="product_description">
                    {product.description}
                </p>
                <br /> <br /> <br /> <br /> <br /> <br />
                <div className="button_detail">
                <div className="cartshare">
                    <div className="carticon" onClick={handleCart}>
                        <Icon icon={shoppingCart} style={{fontSize: '12px'}} />&nbsp;&nbsp;Add To Cart
                    </div>
                    <div className="shareicon" onClick={openModal}>
                        &nbsp;&nbsp;| &nbsp; <Icon icon={share2} style={{fontSize: '12px' }} />
                    </div>
                </div>
                <div className="view_details">
                <Link to={`/product/${product._id}`}>  
                        View Details              
                </Link>
                </div>
                </div>
                </>
            )
            }
            </div>

        </div>
    )
}

export default ProductGridView;