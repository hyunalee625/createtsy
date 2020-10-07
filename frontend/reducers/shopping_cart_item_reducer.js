import {
  RECEIVE_SHOPPING_CART_ITEM,
  RECEIVE_SHOPPING_CART_ITEMS,
  REMOVE_SHOPPING_CART_ITEM,
} from "../actions/shopping_cart_item_actions";

const shoppingCartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_SHOPPING_CART_ITEM:
            return Object.assign(newState, { [action.cartItem.id]: action.cartItem })
        case RECEIVE_SHOPPING_CART_ITEMS:
            return action.cartItems;
        case REMOVE_SHOPPING_CART_ITEM:
            delete newState[action.cartItemId]
            return newState;
        default:
            return oldState;
    }
}

export default shoppingCartItemsReducer;