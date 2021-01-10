import React from 'react'

const ProductGridView = ({ product }) => {
    return (
        <div className="product_gridview">
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
        </div>
    )
}

export default ProductGridView;