import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon } from 'react-share';
import Modal from 'react-modal'

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
                
                {product.onSale && (
                <div className="sale">
                    <div id="sale_text">
                        Sale
                    </div>
                </div>
                )}
                <div id="cartshare">
                    <button onClick={handleCart}>
                        Add To Cart
                    </button>
                    <button onClick={openModal}>
                        Share
                    </button>
                </div>
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
            {product.name}
            {currency === ("CAD") ? product.priceCAD : product.priceUSD }
            {!grid && (<Link to={`/product/${product._id}`}>
                <button>
                    View Details
                </button>
            </Link>)}
        </div>
    )
}

export default ProductGridView;