import React, { useEffect } from 'react';
import ProductGridView from '../components/ProductGridView';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom'

function Featured(props) {

    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    const dispatch = useDispatch()


    return (
        <div className="featured_page">
            <div className="landing_featured_top">
                <h1 id="related">Featured Products</h1>
                <button>
                    <Link style={{color: '#E7161B', textDecoration: 'none'}} to='/shop'>Browse All</Link>
                </button>
            </div>
            <div className="shoppage_gridview">
            {
            products &&
            products.slice(0,4).map((product) => (
                <ProductGridView grid={true} history={props.history} key={product._id} product={product}></ProductGridView>
            ))
            }
            </div>   
        </div>
    )
}

export default Featured
