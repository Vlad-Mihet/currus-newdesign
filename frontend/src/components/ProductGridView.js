import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const ProductGridView = ({ grid, product }) => {

 

    return (
        <div className={grid ? "product_gridview" : "product_listview"}>
            {product.name}
            {product.price}
            <div className="rectangle_76">

            </div>
            {product.onSale && (
            <div className="sale">
                <div className="sale_text">
                    Sale
                </div>
            </div>
            )}
            <Link to={`/product/${product._id}`}>
                <button>
                    View Details
                </button>
            </Link>
        </div>
    )
}

export default ProductGridView;