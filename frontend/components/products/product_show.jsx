import React from "react";

class ProductShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.getOneProduct(this.props.match.params.productId);
  }

  render() {
      const {product} = this.props;

      return (
        <div className="product-show-container">
          <div className="product-show-sub-container">
            <div className="product-show-top">
              <div className="product-left-col">
                <div className="product-show-image">
                  <img className="product-show-photo" src={product.photoUrl} />
                </div>
              </div>
              <div className="product-right-col">
                <div className="prdocut-info">
                  <div className="product-show-name">
                    {product.product_name}
                  </div>
                  <div className="product-show-price">${product.price}</div>
                </div>
                <div className="add-to-cart-btn-container">
                  <button type="button" className="add-to-cart-btn">
                    Add to cart
                  </button>
                </div>
                <div className="product-show-description">
                  Description:
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
            <div className="product-show-mid">
              <div className="show-page-banner">
                <span>Made to order, just for you</span>
                <span>This item is handmade</span>
                <span>Ships in 1-3 business days</span>
              </div>
            </div>
        </div>
      );
  }
}

export default ProductShow;