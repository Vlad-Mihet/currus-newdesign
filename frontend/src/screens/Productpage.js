import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import Reviews from '../components/Reviews'
import { detailsProduct } from '../redux/actions/productActions'
import ImageGallery from 'react-image-gallery'
import StarsUI from '../components/StarsUI'

import Faq from 'react-faq-component'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ProductGridView from '../components/ProductGridView';
import { listProducts } from '../redux/actions/productActions';
import { Icon, InlineIcon } from '@iconify/react';
import shippingFast from '@iconify/icons-fa-solid/shipping-fast';
import flagForCanada from '@iconify/icons-emojione-monotone/flag-for-canada';
import financeIcon from '@iconify/icons-mdi/finance';
import shieldCheckSolid from '@iconify/icons-clarity/shield-check-solid';



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
                }))} thumbnailPosition="bottom" />) : <h1>Loading</h1>
                }
                
            </div>

            <div className="product_detail">
                <div id="product_category">
                    {product.category}
                </div>
                <div id="product_name">{product.name}</div>
                <div id="product_stars">
                    {product.reviews &&
                    <StarsUI rating={product.reviews.stars} />
                    }
                </div>
                <div id="product_price">
                $ {currency === ("CAD") ? product.priceCAD : product.priceUSD}
                </div>
                <div id="product_description">
                    {product.description}
                </div>
                <div id="product_availability">
                <span>Availability:</span> {product.quantity === 0 ? 'Out of Stock' : 'In Stock & Ready to Ship'}
                </div>

                <div id="icon_list">
                    <ul>
                        <li><i className="fas fa-globe-asia"></i>&nbsp;&nbsp;100% Made In Korea</li>
                        <li><i className="fas fa-dolly"></i>&nbsp;&nbsp;Free shipping to USA and Canada</li>
                        <li><i className="fas fa-shipping-fast"></i>&nbsp;&nbsp;Ships in 1-2 days from California</li>
                        <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;12- months complete warranty</li>
                        <li><i className="fas fa-headphones-alt"></i>&nbsp;&nbsp;Free extra 12 months technical support</li>
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
                    {product.specification && product.specification.map(d => (
                        <li key={d}>{d}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel>
                <p>
                   To qualify for a warranty it is imperative you keep your original receipts and documents. We offer a 12-month limited warranty that covers the original purchase should any defects or problems result from normal use of your scooter. These 12 months are from the date of purchase. But we also offer 12 months of free technical support. That support includes any repairs, spare parts or other service needs. We also offer a six-month warranty for used certified items. (Unfortunately we cannot offer a warranty for items modified by customers). Our warranties do not cover physical damage resulting from a road accident so travel smart and stay safe. 
                </p>
            </TabPanel>
            <TabPanel>
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
            <div className="wrapper">
                <div className={first? "borderleft borderopen": "borderleft borderclosed"}>
                </div>
                <div className="title">
                    Is There A Warranty on Currus Vehicles?
                    <div className="icon" onClick={() => setFirst(!first)}>
                        {first ?
                        <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                        <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                        }
                    </div>
                </div>
                <div className={first? "content open" : "content closed"}>
                    Yes. We offer a 12-month limited warranty from the date of purchase. The warranty covers any defects or problems that may result from the normal use of the scooter. In addition to 12 months product warranty, we also offer 12 months of free technical support for any repairs, spare parts or any other service you may need during the period.

For used certified items, we offer a six-month warranty.

The warranty will not be applicable to items modified by customers. Physical damages to the vehicle resulting from an accident are also not covered under the warranty.
                </div>
            </div>
            <div className="wrapper">
                <div className={first? "borderleft borderopen": "borderleft borderclosed"}>
                </div>
                <div className="title">
                    Can I Get a Test Ride Before Buying?
                    <div className="icon" onClick={() => setFirst(!first)}>
                        {first ?
                        <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                        <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                        }
                    </div>
                </div>
                <div className={first? "content open" : "content closed"}>
No. We do not offer test rides as of now, as we only have online stores. However, we are working to make partners with physical stores across the USA and might soon allow customers to test ride before buying from one of the Currus-authorised stores.
                </div>
            </div>
            <div className="wrapper">
                <div className={first? "borderleft borderopen": "borderleft borderclosed"}>
                </div>
                <div className="title">
                    How Do I Order Wholesale?
                    <div className="icon" onClick={() => setFirst(!first)}>
                        {first ?
                        <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                        <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                        }
                    </div>
                </div>
                <div className={first? "content open" : "content closed"}>
If you’d like to become a dealer and resell our products through your own website or physical store, we can provide you these items at wholesale prices. If you want to order wholesale for any other reason, we might be able to help you with discounts.

To know about our wholesale price or to discuss the details, give us a call or send an enquiry.
                </div>
            </div>
            <div className="wrapper">
                <div className={first? "borderleft borderopen": "borderleft borderclosed"}>
                </div>
                <div className="title">
                    How often does this need servicing in a year/
                    <div className="icon" onClick={() => setFirst(!first)}>
                        {first ?
                        <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                        <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                        }
                    </div>
                </div>
                <div className={first? "content open" : "content closed"}>
Well, regular servicing of your Currus E-scooter is a must in order to maintain a safe and good condition. We suggest regular check-ups for tires, brakes, suspension, and battery. The more and better you maintain your vehicle, the longer it will be able to serve you. Also, take proper care of the scooter battery. Avoid overcharging or undercharging it. Keep it away from direct sunlight and rain.
                </div>
            </div>
            <div className="wrapper">
                <div className={first? "borderleft borderopen": "borderleft borderclosed"}>
                </div>
                <div className="title">
                    Is there any age restriction to Order the Electric Scooter?
                    <div className="icon" onClick={() => setFirst(!first)}>
                        {first ?
                        <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                        <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                        }
                    </div>
                </div>
                <div className={first? "content open" : "content closed"}>
At CurrusMotors.com, we only sell high-power scooters that are meant to be used by adults, above 18 years of age. So, we accept online orders only from legal adult age users.
                </div>
            </div>
            <div className="wrapper">
                <div className={first? "borderleft borderopen": "borderleft borderclosed"}>
                </div>
                <div className="title">
                    In case of damage, where do I get spare parts for the scooter?
                    <div className="icon" onClick={() => setFirst(!first)}>
                        {first ?
                        <Icon icon={minusIcon} style={{fontSize: '24px' }} /> :
                        <Icon icon={plusIcon} style={{fontSize: '24px' }} />
                        }
                    </div>
                </div>
                <div className={first? "content open" : "content closed"}>
If your product is in the warranty period, send a query to our technical support team for any service or repair needs. As long as your damages are covered under warranty, we will take care of them, without a cost.

However, if your product is not under warranty or the damages are not covered, we can only help you get spare parts and replace the damaged parts. The cost of repair and spare parts will be borne by the user/customer.
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
            <h4 id="closerlook">A closer look at {product.name}</h4>
            <div id="gallery">
                <div id="row_1">
                    <div id="row_1_image_1">
                        <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/gallery1.jpeg"></img>
                        <div id="caption_1">
                            <h1>Fast</h1>
                            <p>Up to 50 Mph Speed 5400W Max Dual Hub Motor Hydraulic Disk Brake with ABS</p>
                        </div>
                    </div>
                    <div id="row_1_image_2">
                        <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/gallery2.jpeg"></img>
                        <div id="caption_2">
                            <h1>Reliable</h1>
                            <p>75+ Miles Range 5400W Max Dual Motor Extra-wide Tubeless Tires</p>
                        </div>
                    </div>
                </div>

                
                <div id="row_2">
                    <div id="row_2_image_3">
                        <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/gallery3.jpeg"></img>
                        <div id="caption_3">
                            <h1>Powerful</h1>
                            <p>5400W Max Dual Hub Motor Hydraulic Disc Brake with ABS Multi-eye smart throttle system</p>
                        </div>
                    </div>
                    <div id="row_2_image_4">
                        <img src="https://currus-ij.s3.ap-northeast-2.amazonaws.com/gallery4.jpeg"></img>
                        <div id="caption_4">
                            <h1>Safe</h1>
                            <p>Dual Hydraulic Brake Extra-Wide Tubeless Tires Headlight &amp; Horn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <h1 id="related">Related Products</h1>
            <div className="shoppage_gridview">
            {
            products &&
            products.filter(product => product._id !== productId).slice(0,4).map((product) => (
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
