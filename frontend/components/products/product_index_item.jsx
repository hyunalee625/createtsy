import React from 'react';
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product }) => {
  // debugger
    return (

      <div className="product-index-container">
        <div className="product-index-item">
            <Link className="product-url" to={`/products/${product.id}`}>
              <img className="product-photo" src={product.photo} alt="" />
            </Link>
            <div className="product-name-price">
          <Link className="product-url" to={`/products/${product.id}`}>
            <div className="product-price">${product.price}</div>
            {/* <div className="product-name">{product.product_name}</div> */}
          </Link>
          </div>
        </div>
      </div>

    );
}

export default ProductIndexItem;