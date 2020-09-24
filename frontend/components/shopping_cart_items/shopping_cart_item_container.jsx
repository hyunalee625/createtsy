import { connect } from 'react-redux';
import ShoppingCartIndex from './shopping_cart_index';
import {
  getAllCartItems,
  updateCartItem,
  deleteCartItem,
} from "../../actions/shopping_cart_item_actions";
import { getAllProducts } from '../../util/product_api_util';

const msp = (state) => {
    // debugger
    let items = Object.keys(state.entities.shoppingCartItems).map(id => state.entities.shoppingCartItems[id]);

    // debugger
    return {
        // buyer_id: state.session.id,
        items
    }
}

const mdp = dispatch => {
    return {
      getAllCartItems: () => dispatch(getAllCartItems()),
      updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
      deleteCartItem: (shoppingCartItemId) =>
        dispatch(deleteCartItem(shoppingCartItemId)),
    };
}

export default connect(msp, mdp)(ShoppingCartIndex);
