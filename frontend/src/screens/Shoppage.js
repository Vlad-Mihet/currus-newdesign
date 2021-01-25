import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import Filter from '../components/Filter';
import ProductGridView from '../components/ProductGridView';
import { listProducts } from '../redux/actions/productActions';


const Shoppage = (props) => {

    const [grid, setGrid] = useState(true)
    const productList = useSelector((state) => state.productList);
    const { loading, error, products, filteredProducts } = productList;
    const [displayedProducts, setDisplayedProducts] = useState([]);

   
    const [sort, setSort] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    useEffect(() => {
        setDisplayedProducts(filteredProducts ? filteredProducts : products)
    }, [filteredProducts])


    return (
        <div className="shoppage">
            <Breadcrumbs title={props.location.pathname} />
            <Filter grid={grid} setGrid={setGrid} sort={sort} setSort={setSort} />
            <div id="wrapper">
            <div className={grid ? "shoppage_gridview" : "shoppage_listview"}>
            {
            displayedProducts &&
            displayedProducts.map((product) => (
                <ProductGridView history={props.history} grid={grid} key={product._id} product={product}></ProductGridView>
            ))
            }
            </div>
            </div>
        </div>
    )
}

export default Shoppage
