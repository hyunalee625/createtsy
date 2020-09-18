import React from "react";
import { withRouter } from "react-router-dom";

class ShoppingCartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCartItems();;
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
        <div className='left-col right-border'>
            <ul>
                {this.props.items.map((item) => (
                    <ShoppingCartIndexItem item={item} key={item.id} />
                )
                )}
            </ul>
        </div>
    )
  }
}

export default ShoppingCartIndex;
