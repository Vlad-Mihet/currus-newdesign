import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import Filter from '../components/Filter';
import ProductGridView from '../components/ProductGridView';
import { listProducts } from '../redux/actions/productActions';


const Shoppage = () => {

    const [grid, setGrid] = useState(true)
    const productList = useSelector((state) => state.productList);
    const { loading, error, products, filteredProducts } = productList;
   
    const [sort, setSort] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const displayedProducts = filteredProducts ? filteredProducts : products

    return (
        <div className="shoppage">
            <Breadcrumbs />
            <Filter grid={grid} setGrid={setGrid} sort={sort} setSort={setSort} />
            <div className={grid ? "shoppage_gridview" : "shoppage_listview"}>
            {
            displayedProducts &&
            displayedProducts.map((product) => (
                <ProductGridView grid={grid} key={product._id} product={product}></ProductGridView>
            ))
            }
            </div>
        </div>
    )
}

export default Shoppage
