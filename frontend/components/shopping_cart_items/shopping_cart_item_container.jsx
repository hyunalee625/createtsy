import { connect } from 'react-redux';
import ShoppingCartIndex from './shopping_cart_index';
import {
  receiveShoppingCartItem,
  receiveShoppingCartItems,
  removeShoppingCartItem,
} from "../../actions/shopping_cart_item_actions";

export default connect(msp, mdp)(ShoppingCartIndex);
