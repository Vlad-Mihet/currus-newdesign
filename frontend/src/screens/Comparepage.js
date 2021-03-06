import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'

import { filterProducts, listProducts, sortProducts } from '../redux/actions/productActions';

const Comparepage = () => {

    const [mod, setMod] = useState(false);

    const openModal = () => {
        setMod(true);
    }

    const closeModal = () => {
        setMod(false);
    }

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, filteredProducts } = productList;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [])


    return (
        <>
             <Modal isOpen={mod} onRequestClose={closeModal}>
                <div className="compare_modal">
                    <div>
                        <h1>Add to Compare</h1>
                        <button onClick={() => setMod(false)}>X</button>
                    </div>
                    <div className="compare_modal_grid">
                        {products && products.map(product => (
                            <div>
                                {product.name}
                            </div>

                        ))}
                    </div>
                </div>
            </Modal>
            <div className="compare">
                <table className="compare_table">
                    <tr className="compare_table_head"> 
                        <th>
                            Compare
                            <button id="addtocompare" onClick={openModal}>ADD TO COMPARE</button>
                        </th>
                        <th>Compare</th>
                        <th>Compare</th>
                        <th>Compare</th>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>Compare</td>
                        <td>Compare</td>
                        <td>Compare</td>
                    </tr>
                    <tr>
                        <td>Quick</td>
                        <td>Compare</td>
                        <td>Compare</td>
                        <td>Compare</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>Compare</td>
                        <td>Compare</td>
                        <td>Compare</td>
                    </tr>

                </table>
            </div>
        </>
    )
}

export default Comparepage;