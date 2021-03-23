import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterProducts,
  listProducts,
  sortProducts,
} from "../redux/actions/productActions";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { Icon, InlineIcon } from "@iconify/react";
import listIcon from "@iconify/icons-feather/list";
import gridIcon from "@iconify/icons-feather/grid";
import filterIcon from "@iconify/icons-mi/filter";

const Filter = ({
  low,
  setLow,
  high,
  setHigh,
  def,
  setDef,
  grid,
  setGrid,
  sort,
  setSort,
  hamburger,
  setHamburger,
}) => {
  const [pricerange, setPricerange] = useState([0, 10000]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const productList = useSelector((state) => state.productList);
  const { products, filteredProducts, loading } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    if (filteredProducts) {
      dispatch(sortProducts(filteredProducts, sort));
    } else if (products) {
      dispatch(sortProducts(products, sort));
    }
  }, [sort]);

  useEffect(() => {
    setDisplayedProducts(filteredProducts ? filteredProducts : products);
  }, [filteredProducts]);

  return (
    <div className="filter">
      <div id="filter-icon">
        <Icon
          onClick={() => setHamburger(true)}
          icon={filterIcon}
          style={{ color: "#666666", fontSize: "24px" }}
        />
      </div>
      {/* { loading ? <h1>Loading </h1> : 
            <div id="filter-result">
            We found <span>{displayedProducts ? displayedProducts.length : products.length} product(s)</span> available for you.
            </div> } */}

      <div id="filter-price">
        {/* <input id="low" type="number" onChange={e => {
                    setLow(e.target.value)}}></input>
                <input id="high" type="number" onChange={e => setHigh(e.target.value)}></input> */}
        <div id="range">
          Price&nbsp;&nbsp;&nbsp;
          <Range
            marks={{
              0: `$0`,

              5000: `$5000`,
            }}
            min={0}
            max={5000}
            defaultValue={[1, 4999]}
            trackStyle={[
              {
                backgroundColor: "#E7161B",
              },
            ]}
            handleStyle={[
              {
                borderRadius: "0%",
                border: "solid 2px rgba(102,102,102,0.2)",
                boxShadow: "none",
              },
              {
                borderRadius: "0%",
                border: "solid 2px rgba(102,102,102,0.2)",
                boxShadow: "none",
              },
            ]}
            onChange={(arr) => {
              setLow(arr[0]);
              setHigh(arr[1]);
            }}
          />
        </div>
      </div>
      <div id="filter-categories">
        <select
          onChange={(e) => {
            setDef(e.target.value);
          }}>
          <option value="">Select categories</option>
          <option value="E-Scooter">E-scooter</option>
          <option value="Kick Stand">Kick Stand</option>
          <option value="Helmet">Helmet</option>
        </select>
      </div>
      <div className="filter-sort">
        <select
          onChange={(e) => {
            setSort(e.target.value);
          }}>
          <option value="">Sort By</option>
          <option value="lowest">Lowest First</option>
          <option value="highest">Highest First</option>
          <option value="alphabet">A-Z</option>
          <option value="alphabetz">Z-A</option>
        </select>
      </div>
      <div className="gridlist">
        <Icon
          onClick={() => setGrid(true)}
          icon={gridIcon}
          style={grid ? { color: "red" } : { color: "black" }}
        />
        <Icon
          onClick={() => setGrid(false)}
          icon={listIcon}
          style={!grid ? { color: "red" } : { color: "black" }}
        />
      </div>
    </div>
  );
};

export default Filter;
