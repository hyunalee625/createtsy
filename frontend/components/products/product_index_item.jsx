import React from 'react';
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product }) => {
    return (
      <div>
        <li className="product-index-item">
          <Link className="each-product" to="{/products/${product.id}`}">
            <span className="product-title">{product.product_name}</span>
            <span className="product-price">{product.price}</span>
            <span className="product-url">{product.pic_url}</span>
          </Link>
        </li>
      </div>
    );
}

export default ProductIndexItem;