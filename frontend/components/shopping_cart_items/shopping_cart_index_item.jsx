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
          
        this.state.item = this.props.item;
    }

    itemTotalPrice() {
        const quantity = this.state.quantity;
        const price = this.state.item.price;
        return parseFloat(price * quantity).toFixed(2);

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        }), () => {
            this.props.updateCartItem(this.state);
        }
    }

    emptyCart() {
        return (
            <div>
                <h3>Your cart is empty.</h3>
                <Link to="/">Discover something unique to fill it up</Link>
            </div>
        )
    }

    render() {
        const {item} = this.state;

        return (
          <div className="item-container">
            <div className="index-item-left">
              <Link
                className="index-item-img"
                to="{`/products/${item.product_id}`}"
              >
                <img src={item.photoURL}></img>
              </Link>
              <div className="index-info">
                <Link
                  className="index-item-name"
                  to="{`/products/${item.product_id}`}"
                >
                  <label>{item.product_name}</label>
                </Link>
              </div>
              <div className="index-item-remove">
                <button
                  onClick={() => this.props.deleteCartItem(this.props.cartItem.id).then(() => this.props.history.replace('/shopping_cart_items'))}>
                  Remove
                </button>
              </div>
            </div>

            <div className="index-item-right">
              <select
                className="item-quantity"
                onChange={this.update('quantity')}
                value={this.state.quantity}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <div className="index-item-price">
                    <div>${this.itemTotalPrice()}</div>
                    <div>(${(item.price).toFixed(2)} each)</div>
              </div>
            </div>
          </div>
        );
    }

}

export default withRouter(ShoppingCartIndexItem);