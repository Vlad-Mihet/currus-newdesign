import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import { addToCompare } from "../redux/actions/compareActions";
import { listProducts } from "../redux/actions/productActions";
import Breadcrumbs from "../components/Breadcrumbs";

const Comparepage = (props) => {
  const [mod, setMod] = useState(false);

  const [productId, setProductId] = useState("");

  const openModal = () => {
    setMod(true);
  };

  const closeModal = () => {
    setMod(false);
  };

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, filteredProducts } = productList;
  const compareList = useSelector((state) => state.compareList);
  const { compareItems } = compareList;

  const handleAddToCompare = () => {
    dispatch(addToCompare(productId));
    closeModal();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <>
      <Modal isOpen={mod} onRequestClose={closeModal}>
        <div className="compare_modal">
          <div>
            <h1>Compare</h1>
            <button onClick={() => setMod(false)}>X</button>
          </div>
          <div className="compare_modal_grid">
            {products &&
              products.map((product) => (
                <div key={product._id}>
                  {product.name}
                  <input
                    type="radio"
                    checked={productId === product._id ? true : false}
                    name={product._id}
                    onChange={(e) => setProductId(e.target.name)}
                  />
                </div>
              ))}
          </div>
          <div>
            <button onClick={handleAddToCompare}>ADD TO COMPARE</button>
          </div>
        </div>
      </Modal>
      <Breadcrumbs title={props.location.pathname} />
      <div className="compare">
        <table className="compare_table">
          <colgroup>
            <col span="1" style={{ width: "10%" }} />
            <col span="1" style={{ width: "30%" }} />
            <col span="1" style={{ width: "30%" }} />
            <col span="1" style={{ width: "30%" }} />
          </colgroup>
          <tr className="compare_table_head">
            <th className="compare_table_head_firstblock">
              Compare Products
              <button
                disabled={compareItems.length >= 3}
                id="addtocompare"
                onClick={openModal}>
                ADD TO COMPARE
              </button>
            </th>
            <th>
              {compareItems && compareItems.length > 0 ? (
                <img alt="first" src={compareItems[0].image} />
              ) : (
                <div>
                  <div>+</div>
                  <div>Add product to compare</div>
                </div>
              )}
            </th>
            <th>
              {compareItems && compareItems.length > 1 ? (
                <img alt="second" src={compareItems[1].image} />
              ) : (
                <div>
                  <div>+</div>
                  <div>Add product to compare</div>
                </div>
              )}
            </th>
            <th>
              {compareItems && compareItems.length > 2 ? (
                <img alt="third" src={compareItems[2].image} />
              ) : (
                <div>
                  <div>+</div>
                  <div>Add product to compare</div>
                </div>
              )}
            </th>
          </tr>
          <tr>
            <td className="compare_table_first_column">Name</td>
            <td>
              {compareItems && compareItems.length > 0
                ? compareItems[0].name
                : "Compare"}
            </td>
            <td>
              {compareItems && compareItems.length > 1
                ? compareItems[1].name
                : "Compare"}
            </td>
            <td>
              {compareItems && compareItems.length > 2
                ? compareItems[2].name
                : "Compare"}
            </td>
          </tr>
          <tr>
            <td className="compare_table_first_column">Description</td>
            <td>
              {compareItems && compareItems.length > 0
                ? compareItems[0].description
                : "Compare"}
            </td>
            <td>
              {compareItems && compareItems.length > 1
                ? compareItems[1].description
                : "Compare"}
            </td>
            <td>
              {compareItems && compareItems.length > 2
                ? compareItems[2].description
                : "Compare"}
            </td>
          </tr>
          <tr>
            <td className="compare_table_first_column">Quick</td>
            <td>
              {compareItems && compareItems.length > 0
                ? compareItems[0].quick
                : "Compare"}
            </td>
            <td>
              {compareItems && compareItems.length > 1
                ? compareItems[1].quick
                : "Compare"}
            </td>
            <td>
              {compareItems && compareItems.length > 2
                ? compareItems[2].quick
                : "Compare"}
            </td>
          </tr>
          <tr>
            <td className="compare_table_first_column">Speed</td>
            <td>
              {compareItems && compareItems.length > 0
                ? compareItems[0].speed
                : "Compare"}
            </td>
            <td>
              {compareItems && compareItems.length > 1
                ? compareItems[1].speed
                : "Compare"}
            </td>
            <td>
              {compareItems && compareItems.length > 2
                ? compareItems[2].speed
                : "Compare"}
            </td>
          </tr>
          <tr>
            <td className="compare_table_first_column">Power</td>
            <td>
              {compareItems && compareItems.length > 0
                ? compareItems[0].power
                : "Compare"}
            </td>
            <td>
              {compareItems && compareItems.length > 1
                ? compareItems[1].power
                : "Compare"}
            </td>
            <td>
              {compareItems && compareItems.length > 2
                ? compareItems[2].power
                : "Compare"}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Comparepage;
