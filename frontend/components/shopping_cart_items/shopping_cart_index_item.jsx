import React from 'react';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom'

class ShoppingCartIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      id: this.props.item.id,
      quantity: this.props.item.quantity,
    };

    this.handleUpdate = this.handleUpdate.bind(this)
    this.state.item = this.props.item;
  }

  itemTotalPrice() {
    const quantity = this.props.item.quantity;
    const price = this.props.item.price;
    return parseFloat(price * quantity).toFixed(2);
  }

  selectQuantity() {
    const values = [];

    for (let i = 1; i <= 10; i++) {
      values.push(<option key={i} value={i}>{`${i}`}</option>);
    }

    return (
      <select
        className="item-quantity"
        onChange={this.handleUpdate}
        defaultValue={this.state.item.quantity}
      >
        {values}
      </select>
    );
  }

  handleUpdate(e) {
    this.setState({ quantity: parseInt(e.target.value) }, () =>
      this.props.updateCartItem(this.state)
    );
  }

  // emptyCart() {
  //   const quantity = this.props.item.quantity;
  //   if (quantity === 0) {
  //     return (
  //       <div>
  //         <h2>Your cart is empty.</h2>
  //         <a href="/">
  //           <h3 className="discover-something">Discover something unique to fill it up</h3>
  //         </a>
  //       </div>
  //     )
  //   }

  // }

  fullCart() {
    const { item } = this.state;

    return (
      <div className="item-container">
        <div className="index-item-left">

          <div className="index-info">
            <Link
              className="index-item-name"
              to={`/products/${item.product_id}`}
            >
              <img className="shopping-cart-photo" src={item.photo} />
            </Link>
            <div className="index-item-name-remove">
            <Link
              className="index-item-name"
              to={`/products/${item.product_id}`}
            >
              <label>{item.product_name}</label>
            </Link>
          
            <div className="index-item-remove">
                <button
                  onClick={() =>
                    this.props
                      .deleteCartItem(this.props.item.id)
                      .then(() => this.props.history.push("/shopping_cart_items"))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="index-item-right">
          <div className="select-quantity">{this.selectQuantity()}</div>
          <div className="index-item-price">
            <div>${this.itemTotalPrice()}</div>
            <div>(${item.price.toFixed(2)} each)</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    // const { item } = this.state;
    let {quantity} = this.props;
    if (quantity === 0) {
      return this.emptyCart();
    } else {
      return this.fullCart();
    }
    // return quantity ? this.emptyCart() : this.fullCart()
  }
}

export default withRouter(ShoppingCartIndexItem);