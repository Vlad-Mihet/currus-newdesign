import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import Reviews from '../components/Reviews'
import { detailsProduct } from '../redux/actions/productActions'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import Faq from 'react-faq-component'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Productpage = (props) => {

    const dispatch = useDispatch()
    const productId = props.match.params.id
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails;
    

    const [p, setP] = useState('')
    const { currency } = useSelector(state => state.currency)

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

  


    return (
        <>
        <Breadcrumbs title={props.location.pathname} />
        <div>
            { (product && product.images) ? (
            <ImageGallery items={product.images.map(url => ({
                original: url,
                thumbnail: url
            }))} thumbnailPosition="left" />
             ) : <h1>No Extra Images</h1>}
        </div>

        <div className="product_detail">
        { product && (
        <>
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
        </>
        )}
        </div>

        <Tabs>
            <TabList>
                <Tab>Description</Tab>
                <Tab>Speficiation</Tab>
            </TabList>
            <TabPanel>
                <h2>blah blah blah</h2>
            </TabPanel>
            <TabPanel>
                <h3>ha ha ha</h3>
            </TabPanel>
        </Tabs>

        <Faq data={data} />
        <Reviews productId={productId} product={product}/>
        </>
    )
}

export default Productpage;
