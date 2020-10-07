import React from 'react';
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product }) => {
  // debugger
    return (

      <div className="product-index-container">
        <div className="product-index-item">
            <img className="product-photo" src={product.photo} alt="" />
            <div className="product-name-price">
            <div className="product-product-name">
          <Link className="product-url" to={`/products/${product.id}`}>
            <div className="product-name">{product.product_name}</div>
          </Link>
            </div>
            <div className="product-price">${product.price}</div>
          </div>
        </div>
      </div>

    );
}

export default ProductIndexItem;