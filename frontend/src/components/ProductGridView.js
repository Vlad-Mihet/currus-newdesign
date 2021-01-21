import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductGridView = ({ grid, product }) => {

    const { currency } = useSelector(state => state.currency)

    return (
        <div className={grid ? "product_gridview" : "product_listview"}>
            {product.name}
            {currency === ("CAD") ? product.priceCAD : product.priceUSD }
            <img src={product.image}/>

            
            {product.onSale && (
            <div className="sale">
                <div id="sale_text">
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