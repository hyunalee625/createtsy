import {
  RECEIVE_SHOPPING_CART_ITEM,
  RECEIVE_SHOPPING_CART_ITEMS,
  REMOVE_SHOPPING_CART_ITEM,
} from "../actions/shopping_cart_item_actions";

const shoppingCartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState;
    switch(action.type) {
        case RECEIVE_SHOPPING_CART_ITEM:
            newState = { [action.item.id]: action.item };
            return Object.assign({}, oldState, newState)
        case RECEIVE_SHOPPING_CART_ITEMS:
            return action.items
        case REMOVE_SHOPPING_CART_ITEM:
            newState = Object.assign({}, oldState);
            delete newState[action.id]
            return action.items
        default:
            return oldState;
    }
}

export default shoppingCartItemsReducer;