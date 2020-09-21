import React from "react";
import { withRouter } from "react-router-dom";
import ShoppingCartIndexItem from './shopping_cart_index_item';

class ShoppingCartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCartItems();;
  }

  totalQuantity() {
      return this.props.items.length;
  }

  totalPrice() {
      let total = 0;
      
      for(let i = 0; i < this.props.items.length; i++) {
          let item = this.props.items[i];
          total += parseFloat(item.price * item.quantity).toFixed(2);
      }

      return total
  }

  render() {
    return (
      <div className="cart-index-container">
        <h1>{this.totalQuantity()} items in your cart</h1>
        <ShoppingCartIndexItem />

        <div className="item-total">
          <span>Item(s) total</span>
          <span>${this.totalPrice()}</span>
        </div>
        <div className="shipping">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="subtotal">
          <span>Subtotal</span>
          <span>${this.totalPrice()}</span>
        </div>
        <button>Proceed to checkout</button>
      </div>
    );
  }
}

export default ShoppingCartIndex;
