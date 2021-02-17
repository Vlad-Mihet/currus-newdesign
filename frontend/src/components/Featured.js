import React, { useEffect } from 'react';
import ProductGridView from '../components/ProductGridView';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productActions';

function Featured(props) {

    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    const dispatch = useDispatch()


    return (
        <>
            <h1 id="related">Related Products</h1>
            <div className="shoppage_gridview">
            {
            products &&
            products.slice(0,3).map((product) => (
                <ProductGridView grid={true} history={props.history} key={product._id} product={product}></ProductGridView>
            ))
            }
            </div>   
        </>
    )
}

export default Featured
