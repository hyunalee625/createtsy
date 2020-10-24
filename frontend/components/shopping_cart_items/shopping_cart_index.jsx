import React from "react";
import { withRouter } from "react-router-dom";
import ShoppingCartIndexItem from './shopping_cart_index_item';

class ShoppingCartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();;
  }

  totalQuantity() {
    let cartItems = this.props.items ;
    let quantity = 0;
    
    cartItems.forEach (item => {
      quantity += item.quantity
    })

    return quantity;
  }

  totalPrice() {
      let total = 0;
      // debugger
      for(let i = 0; i < this.props.items.length; i++) {
        // debugger
          let item = this.props.items[i];
          total += (item.price * item.quantity);
      }

      return total.toFixed(2);
  }

  render() {
    return (
      <div className="cart-index-container">
        <div className="items-in-your-cart">{this.totalQuantity()} items in your cart</div>
        <div className="cart-index-sub">
        <div className="cart-index-sub-sub">
            <div className="shopping-cart-index-item">
              {this.props.items.map((item) => (
                <ShoppingCartIndexItem
                  deleteCartItem={this.props.deleteCartItem}
                  updateCartItem={this.props.updateCartItem}
                  item={item}
                  key={item.id}
                />
              ))}
            </div>
            <div className="item-checkout">
              <div className="item-total">
                <span>How you'll pay</span>
                <br />
                <span>Item(s) total</span>
                <span> ${this.totalPrice()}</span>
              </div>
              <div className="shipping">
                <span>Shipping</span>
                <span> FREE</span>
              </div>

              <div className="subtotal">
                <span>Total ({this.totalQuantity()} items)</span>
                <span> ${this.totalPrice()}</span>
              </div>
              <button className="checkout">Proceed to checkout</button>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default ShoppingCartIndex;
