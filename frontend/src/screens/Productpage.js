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
import ProductGridView from '../components/ProductGridView';
import { listProducts } from '../redux/actions/productActions';

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
        <>
        <div>
            {product && product.images ? (
            <ImageGallery items={product.images.map(url => ({
                original: url,
                thumbnail: url
            }))} thumbnailPosition="left" />) : <h1>Loading</h1>
            }
            
        </div>

        <div className="product_detail">
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
                <h2>{product.description}</h2>
            </TabPanel>
            <TabPanel>
                <h3>ha ha ha</h3>
            </TabPanel>
            <TabPanel>
                <h3>ha ha ha</h3>
            </TabPanel>
            <TabPanel>
                <Faq data={data} />
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


        </>) : <h1>Fetching</h1> }
        </>
    )
}

export default Productpage;
