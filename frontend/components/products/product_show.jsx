import React from "react";
import ReviewIndexContainer from '../../components/reviews/review_index_container'

class ProductShow extends React.Component {

  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
      this.props.getOneProduct(this.props.match.params.productId);
      // this.props.fetchReviews(this.props.match.params.productId);
  }

  addToCart(e) {
    e.preventDefault();

    const params = {
      'product_id': this.props.product.id,
      // 'buyer_id': this.props.buyer_id,
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
                <div className="product-info">
                  <div className="product-show-name">
                    {product.product_name}
                  </div>
                  <div className="price-stock">
                    <div className="product-show-price">${product.price}</div>
                    <div className="in-stock"> &#10004; In stock</div>
                  </div>

                  <div className="add-to-cart-btn-container">
                    <button
                      onClick={this.addToCart}
                      type="button"
                      className="add-to-cart-btn"
                    >
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
          {/* <div className="reviews-container">
            <ReviewIndexContainer
            />
          </div> */}
        </div>
      );
  }
}

export default ProductShow;