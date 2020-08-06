import React from 'react';
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product }) => {
  // debugger
    return (
      <div>
        <ul className="product-index-item">
          <Link className="each-product" to={product.product_name}>
            <li className="product-title">{product.product_name}</li>
            <li className="product-price">{product.price}</li>
            <img src={product.photoUrl} alt="" />
          </Link>
        </ul>
      </div>
    );
}

export default ProductIndexItem;