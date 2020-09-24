import merge from 'lodash/merge'
import {
  RECEIVE_SHOPPING_CART_ITEM,
  RECEIVE_SHOPPING_CART_ITEMS,
  REMOVE_SHOPPING_CART_ITEM,
} from "../actions/shopping_cart_item_actions";

const shoppingCartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_SHOPPING_CART_ITEM:
            merge({}, oldState, {[action.cartItem.id]: action.cartItem})
        case RECEIVE_SHOPPING_CART_ITEMS:
            return merge({}, oldState, action.cartItems)
        case REMOVE_SHOPPING_CART_ITEM:
            let newState = merge({}, oldState);
            delete newState[action.cartItem.id]
            return newState;
        default:
            return oldState;
    }
}

export default shoppingCartItemsReducer;