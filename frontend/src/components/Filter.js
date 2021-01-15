import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterProducts, listProducts, sortProducts } from '../redux/actions/productActions';

const Filter = ({ grid, setGrid, sort, setSort }) => {

    const [def, setDef] = useState("")

    const [low, setLow] = useState(0)
    const [high, setHigh] = useState(100000)
  

    const productList = useSelector(state => state.productList);
    const { products, filteredProducts, loading } = productList;

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(filterProducts(products, def, low, high))


    }, [def, low, high])

    useEffect(() => {
        if(filteredProducts) {
            dispatch(sortProducts(filteredProducts, sort))
        } else {
            dispatch(sortProducts(products, sort))
        }
    }, [sort])



    const displayedProducts = filteredProducts ? filteredProducts : products

    return (
        <div className="filter">
            { loading ? <h1>Loading </h1> : 
            <div className="filter-result">
                We found {displayedProducts.length} products for you
            </div> }
            <div>

            </div>
            <div className="filter-price">
                <input id="low" type="number" onChange={e => {
                    setLow(e.target.value)}}></input>
                <input id="high" type="number" onChange={e => setHigh(e.target.value)}></input>
            </div>
            <div className="filter-categories">
                <select onChange={(e) => {
                    setDef(e.target.value)
                    }}>
                    <option value="">Select categories</option>
                    <option value="E-Scooter">E-scooter</option>
                    <option value="Kick Stand">Kick Stand</option>
                    <option value="Helmet">Helmet</option>
                </select>
            </div>
            <div className="filter-sort">
                <select onChange={(e) => {setSort(e.target.value)}}>
                    <option value="">Choose Sort</option>
                    <option value="lowest">Lowest First</option>
                    <option value="highest">Highest First</option>
                    <option value="alphabet">A-Z</option>
                    <option value="alphabetz">Z-A</option>
                </select>
            </div>
            <div className="gridlist">
                <button onClick={()=>setGrid(true)}>grid</button>
                <button onClick={()=>
                    setGrid(false)}>list</button>
            </div>
        </div>
    )
}

export default Filter
