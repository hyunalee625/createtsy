import React from 'react';

class ShoppingCartIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state.shoppingCartItem = this.props.shoppingCartItem;
    }

    itemTotal() {
        const quantity = this.props.item.quantity;
        const price = this.props.item.price;
        return parseFloat(price * quantity).toFixed(2);

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        }), () => {
            this.props.updateShoppingCartItem(this.state);
        }
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
                <img src={item.product.photoURL}></img>
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
                  className="nav-signin-button"
                  onClick={this.props.removeShoppingCartItem.bind(
                    this,
                    item.id
                  )}
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="index-item-right">
              <select
                className="item-quantity"
                onChange={this.update("quantity")}
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
                    <div>${this.itemTotal()}</div>
                    <div>(${(item.price).toFixed(2)} each)</div>
              </div>
            </div>
          </div>
        );
    }

}

export default withRouter(ShoppingCartIndexItem);