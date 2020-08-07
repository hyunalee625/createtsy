import React from 'react';
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product }) => {
  // debugger
    return (

      <div className="product-index-container">
        <div className="product-index-item">
            <img className="product-photo" src={product.photoUrl} alt="" />
            <div product-name-price>
            <div className="product-product-name">
          <Link className="product-name" to={product.product_name}>
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