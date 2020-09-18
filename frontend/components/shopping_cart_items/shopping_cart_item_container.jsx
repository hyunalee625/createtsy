import { connect } from 'react-redux';
import ShoppingCartIndex from './shopping_cart_index';
import {
  getAllCartItems,
  updateCartItem,
  deleteCartItem,
} from "../../actions/shopping_cart_item_actions";
import { getAllProducts } from '../../util/product_api_util';

const msp = (state) => {
    let items = Object.keys(state.entities.shoppingCartItems).map(id => state.entities.shoppingCartItems[id]);

    return {
        buyer_id: state.session.id,
        items: items
    }
}

const mdp = dispatch => {
    return {
      getAllCartItems: () => dispatch(getAllCartItems()),
      updateCartItem: item => dispatch(updateCartItem(item)),
      deleteCartItem: id => dispatch(deleteCartItem(id))
    };
}

export default connect(msp, mdp)(ShoppingCartIndex);
