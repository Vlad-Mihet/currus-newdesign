import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import Filter from '../components/Filter';
import ProductGridView from '../components/ProductGridView';
import {Icon, InlineIcon } from '@iconify/react';
import closeIcon from '@iconify/icons-carbon/close';
import { Link } from 'react-router-dom'
import Slider, { Range } from 'rc-slider';
import LeftFilter from '../components/LeftFilter';

import { filterProducts, listProducts, sortProducts } from '../redux/actions/productActions';


const ShoppageA = (props) => {

    const [def, setDef] = useState("")
    const [low, setLow] = useState(0)
    const [high, setHigh] = useState(100000)

    const [speed, setSpeed] = useState("")
    const [power, setPower] = useState("")
    const [color, setColor] = useState("")



    const [grid, setGrid] = useState(true)
    const productList = useSelector((state) => state.productList);
    const { loading, error, products, filteredProducts } = productList;
    const [displayedProducts, setDisplayedProducts] = useState([]);

    const [hamburger, setHamburger] = useState(false)

   
    const [sort, setSort] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [])

    useEffect(() => {

        if(products) {
        dispatch(filterProducts(products, def, low, high, speed, power, color))
        }


    }, [def, low, high, speed, power, color])

    useEffect(() => {
        setDisplayedProducts(filteredProducts ? filteredProducts : products)
      
    }, [products, filteredProducts])


    return (
        <div className="shoppage">
        <aside className={hamburger? 'hamburger hamburgeropen': 'hamburger hamburgerclosed' }>
          <div id="xparent">
            <div id="x">
                <Icon onClick={() => setHamburger(false)} icon={closeIcon} style={{color: '#393636', fontSize: '24px'}} />
            </div>
          </div>
              <div id="content">
                  <div id="categories">
                    <h3>Categories</h3>
                        <div id="filter-categories">
                            <select onChange={(e) => {
                                setDef(e.target.value)
                                }}>
                                <option value="">Select categories</option>
                                <option value="E-Scooter">E-scooter</option>
                                <option value="Kick Stand">Kick Stand</option>
                                <option value="Helmet">Helmet</option>
                            </select>
                        </div>
                    <h3>Sort By</h3>
                        <div className="filter-sort">
                            <select onChange={(e) => {setSort(e.target.value)}}>
                                <option value="">Sort By</option>
                                <option value="lowest">Lowest First</option>
                                <option value="highest">Highest First</option>
                                <option value="alphabet">A-Z</option>
                                <option value="alphabetz">Z-A</option>
                            </select>
                        </div>
                  </div>
                  <div id="price">
                    <h3>Price</h3>
                <Range 
                marks={{
                0: `$0`,
              
                5000: `$5000`
                }}
                min={0}
                max={5000}
                defaultValue={[1, 4999]}
                trackStyle={[{
                    backgroundColor: "#E7161B"
                    
                }]}
                handleStyle={[{
                    borderRadius: "0%",
                    border: "solid 2px rgba(102,102,102,0.2)",
                    boxShadow: "none"

                }, {
                    borderRadius: "0%",
                    border: "solid 2px rgba(102,102,102,0.2)",
                    boxShadow: "none"
                }]}
                onChange={arr => {
                    setLow(arr[0]);
                    setHigh(arr[1]);
                }}/>
                  </div>
                <LeftFilter speed={speed} setSpeed={setSpeed} power={power} setPower={setPower} color={color} setColor={setColor} />

              </div>
        </aside>
            <Breadcrumbs title={props.location.pathname} />
            <Filter low={low} setLow={setLow} high={high} setHigh={setHigh} def={def} setDef={setDef} hamburger={hamburger} setHamburger={setHamburger} grid={grid} setGrid={setGrid} sort={sort} setSort={setSort} />
            <div id="wrapper">
                <LeftFilter speed={speed} setSpeed={setSpeed} power={power} setPower={setPower} color={color} setColor={setColor} />
            <div className={grid ? "shoppage_gridview" : "shoppage_listview"}>
            {
            displayedProducts &&
            displayedProducts.filter(product => product.category === 'E-Scooter').map((product) => (
                <ProductGridView history={props.history} grid={grid} key={product._id} product={product}></ProductGridView>
            ))
            }
            </div>
            </div>
        </div>
    )
}

export default ShoppageA
