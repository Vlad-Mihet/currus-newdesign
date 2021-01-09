import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import Filter from '../components/Filter';
import ProductGridView from '../components/ProductGridView';
import { listProducts } from '../redux/actions/productActions';


const Shoppage = () => {

    const [grid, setGrid] = useState(false)
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="shoppage">
            <Breadcrumbs />
            <Filter grid={grid} />
            {
            products &&
            products.map((product) => (
                <ProductGridView key={product._id} product={product}></ProductGridView>
            ))
            }
        
        </div>
    )
}

export default Shoppage
