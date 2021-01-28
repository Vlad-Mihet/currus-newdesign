import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import Reviews from '../components/Reviews'
import { detailsProduct } from '../redux/actions/productActions'
import ImageGallery from 'react-image-gallery'

import Faq from 'react-faq-component'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ProductGridView from '../components/ProductGridView';
import { listProducts } from '../redux/actions/productActions';
import { Icon, InlineIcon } from '@iconify/react';
import shippingFast from '@iconify/icons-fa-solid/shipping-fast';
import flagForCanada from '@iconify/icons-emojione-monotone/flag-for-canada';
import financeIcon from '@iconify/icons-mdi/finance';
import shieldCheckSolid from '@iconify/icons-clarity/shield-check-solid';

import globeIcon from '@iconify/icons-feather/globe'
import mapIcon from '@iconify/icons-feather/map';
import truckIcon from '@iconify/icons-feather/truck';
import awardIcon from '@iconify/icons-feather/award';
import headphonesIcon from '@iconify/icons-feather/headphones';
import shoppingCart from '@iconify/icons-feather/shopping-cart';

import minusIcon from '@iconify/icons-feather/minus';
import plusIcon from '@iconify/icons-feather/plus';





const Productpage = (props) => {

    const dispatch = useDispatch()
    const productId = props.match.params.id
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails;

    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    const [p, setP] = useState('')
    const { currency } = useSelector(state => state.currency)
    const [first, setFirst] = useState(false);

   

    const data = {
        title: "FAQQQQQ",
        rows: [
            {
                title: "Bringing Green Mobility Revolution is our Passion &amp; We Love Electric Vehicles",
                content: "We started because we believe driving EV leads to a sustainable future. We are eco-friendly enthusiasts, working agigely to increase usability, awareness among people about electric vehicles. Our e-scooters are just a reflection of our company philosophy and values. To know more, you can",
            },
            {
                title: "We are always Ready to help 24X7 for Free..!!!",
                content: "We understand choosing, getting along with an Electric Vehicle (EV) can be confusing for you. If you have any technical queries or issues with the delivered to you, talk to our expert technical team available 24x7. Customer satisfaction is all we strive for, right from when we started."
            }
        ]
    }


    const handleCart = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <>
        <Breadcrumbs title={props.location.pathname} />
        {product ? (
        <div className="single_page">
        <div className="product_intro">
            <div className="gal">
                {product && product.images ? (
                <ImageGallery items={product.images.map(url => ({
                    original: url,
                    thumbnail: url
                }))} thumbnailPosition="left" />) : <h1>Loading</h1>
                }
                
            </div>

            <div className="product_detail">
                <div id="product_name">{product.name}</div>
                <div id="product_price">
                $ {currency === ("CAD") ? product.priceCAD : product.priceUSD}
                </div>
                <div id="product_availability">
                <span>Availability:</span> {product.quantity === 0 ? 'Out of Stock' : 'In Stock & Ready to Ship'}
                </div>
                <div id="product_category">
                <span>Category:</span> {product.category}
                </div>
                <div id="icon_list">
                    <ul>
                        <li><Icon icon={globeIcon} style={{fontSize: '18px'}}/>&nbsp;&nbsp;100% Made In Korea</li>
                        <li><Icon icon={mapIcon} style={{fontSize: '18px'}} />&nbsp;&nbsp;Free shipping to USA and Canada</li>
                        <li><Icon icon={truckIcon} style={{fontSize: '18px'}} />&nbsp;&nbsp;Ships in 1-2 days from California</li>
                        <li><Icon icon={awardIcon} style={{fontSize: '18px' }} />&nbsp;&nbsp;12- months complete warranty</li>
                        <li><Icon icon={headphonesIcon} style={{fontSize: '18px'}} />&nbsp;&nbsp;Free extra 12 months technical support</li>
                    </ul>
                </div>
            
                <div id="plusminus">
                    {/* qty
                    <select value={qty} onChange={e => setQty(e.target.value)}>
                        {
                            [...Array(product.quantity).keys()].map(x => (
                                <option key={x+1} value={x+1}>{x+1}</option>
                            ))
                        }
                    </select> */}
                    <div id="gray">
                        <button disabled={qty <= 0 ? true : false} onClick={() => setQty(qty-1)}>-</button>
                        <div style={{margin: "auto", display: "inline"}}>{qty}</div>
                        <button disabled={qty >= product.quantity ? true : false }onClick={() => setQty(qty+1)}>+</button>
                    </div>
                    <button id="addtocart" onClick={handleCart}>
                        <Icon icon={shoppingCart} style={{fontSize: '12px'}} />&nbsp;
                        Add To Cart</button>  
                </div>

                <div id="card_icons">      
                    <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/visa-outline-large.png" ></img>
                    <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/mastercard-outline-large.png"></img>
                    <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/americanexpress-outline-large.png"></img>
                    <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/paypal-outline-large.png"></img>
                </div>   
            </div>

            <div id="product_icons">
                <div className="icon_wrapper">
                    <div><Icon icon={shippingFast} style={{color: '#393636', fontSize: '42px'}} /></div>
                    <div className="icon_caption">Free Shipping &amp; Returns</div>
                </div>
                <div className="icon_wrapper">
                    <div><Icon icon={flagForCanada} style={{color: '#393636', fontSize: '51px'}} /></div>
                    <div className="icon_caption">Canada&nbsp;Duty Free</div>
                </div>
                <div className="icon_wrapper">
                    <div><Icon icon={financeIcon} style={{color: '#393636', fontSize: '53px'}} /></div>
                    <div className="icon_caption">Financing</div>
                </div>
                <div className="icon_wrapper">
                    <div><Icon icon={shieldCheckSolid} style={{ color: '#393636', fontSize: '53px'}} /></div>
                    <div className="icon_caption">12 month<br/>warranty</div>
                </div>
            </div>
        </div>
        <Tabs>
            <TabList>
                <Tab>Description</Tab>
                <Tab>Specification</Tab>
                <Tab>Shipping &amp; Warranty</Tab>
                <Tab>FAQ</Tab>
                <Tab>Videos</Tab>
                <Tab>Reviews</Tab>
            </TabList>
            <TabPanel>
                <p>{product.description}</p>
            </TabPanel>
            <TabPanel>
                <ul id="specification">
                    {product.specification.map(d => (
                        <li>{d}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel>
                <p>
                   To qualify for a warranty it is imperative you keep your original receipts and documents. We offer a 12-month limited warranty that covers the original purchase should any defects or problems result from normal use of your scooter. These 12 months are from the date of purchase. But we also offer 12 months of free technical support. That support includes any repairs, spare parts or other service needs. We also offer a six-month warranty for used certified items. (Unfortunately we cannot offer a warranty for items modified by customers). Our warranties do not cover physical damage resulting from a road accident so travel smart and stay safe. 
                </p>
            </TabPanel>
            <TabPanel>
                <Faq data={data} />
        <div className="sandbox">
            <div className="wrapper">
                <div className={first? "borderleft borderopen": "borderleft borderclosed"}>
                </div>
                <div className="title">
                    What is the shipping cost? (In the USA, Canada and other countries)
                    <div className="icon" onClick={() => setFirst(!first)}>
                        {first ?
                        <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                        <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                        }
                    </div>
                </div>
                <div className={first? "content open" : "content closed"}>
                    We only ship to the United States. All domestic orders to all locations in Canada &amp; the U.S., exclusing Alaska and Hawaii, include FREE Standard Shipping.
                    <br/>
                    We do not currently ship to international locations.
                </div>
            </div>
        </div>
            </TabPanel>
            <TabPanel>
                <h1>Videos</h1>
            </TabPanel>
            <TabPanel>
                <Reviews productId={productId} product={product}/>
            </TabPanel>
        </Tabs>

        <div>
            <h4>A closer look at {product.name}</h4>
            <div id="gallery">
                <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/gallery1.jpeg"></img>
                <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/gallery2.jpeg"></img>
                <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/gallery3.jpeg"></img>
                <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/gallery4.jpeg"></img>
            </div>
        </div>
            <h1>Related Products</h1>
            <div className="shoppage_gridview">
            {
            products &&
            products.filter(product => product._id !== productId).slice(0,3).map((product) => (
                <ProductGridView grid={true} history={props.history} key={product._id} product={product}></ProductGridView>
            ))
            }
            </div>
        </div>

        ) : <h1>Fetching</h1> }
        </>
    )
}

export default Productpage;
