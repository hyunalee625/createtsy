import { connect } from 'react-redux';
import ShoppingCartIndex from './shopping_cart_index';
import {
  fetchCartItems,
  updateCartItem,
  deleteCartItem,
} from "../../actions/shopping_cart_item_actions";

const msp = (state) => {
    // debugger
    let items = Object.keys(state.entities.shoppingCartItems).map(id => state.entities.shoppingCartItems[id]);

    // debugger
    return {
        items
    }
}

const mdp = dispatch => {
    return {
      fetchCartItems: () => dispatch(fetchCartItems()),
      updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
      deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
    };
}

export default connect(msp, mdp)(ShoppingCartIndex);
