import React from "react";

class ProductShow extends React.Component {

  constructor(props) {
    super(props);

    this.addToShoppingCart = this.addToShoppingCart.bind(this);
  }

  componentDidMount() {
      this.props.getOneProduct(this.props.match.params.productId);
  }

  addToShoppingCart(e) {
    // e.preventDefault();

    const params = {
      'product_id': this.props.product.id,
      'quantity': 1
    }

    this.props.createCartItem(params).then(() => {
      this.props.history.push('/shopping_cart_items')
    })
  }

  // hideContent(content) {
  //   if (content.length > 100) {
  //     return (
  //       <p className="product-show-description">{content.slice(0, 100) + "..."}<button className="learn-more" onClick={()}>Learn more about this item</button></p>
  //     )
  //   } else {
  //     return <p className="product-show-description">{content}</p>;
  //   }
  // }

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
                  <div className="price-stock">
                    <div className="product-show-price">${product.price}</div>
                    <div className="in-stock"> &#10004; In stock</div>
                  </div>

                  <div className="add-to-cart-btn-container">
                    <button onClick={this.addToShoppingCart} type="button" className="add-to-cart-btn">
                      Add to cart
                    </button>
                  </div>
                  <div className="product-description-container">
                    Description:
                      {/* {this.hideContent(product.description)} */}
                      <p>{product.description}</p>
                  </div>
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