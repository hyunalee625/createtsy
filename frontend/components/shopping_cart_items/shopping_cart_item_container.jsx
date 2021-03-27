import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIndex from './shopping_cart_index';
import {
  fetchCartItems,
  updateCartItem,
  deleteCartItem,
} from "../../actions/shopping_cart_item_actions";
import  { openModal, closeModal } from '../../actions/modal_actions';



const msp = (state) => {
    // debugger
    let items = Object.keys(state.entities.shoppingCartItems).map(id => state.entities.shoppingCartItems[id]);
    let products = state.entities.products

    // debugger
    return {
        items,
        products,
        // formType: "Check Out"
    }
}

const mdp = dispatch => {
  // debugger
    return {
      fetchCartItems: () => dispatch(fetchCartItems()),
      updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
      deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
      checkOutForm: (
        <button
          type="button"
          onClick={() => dispatch(openModal("checkout"))}
          className="checkout"
        > Proceed to checkout
        </button>
      ),
      closeModal: () => dispatch(closeModal()),

    };
}

export default connect(msp, mdp)(ShoppingCartIndex);
