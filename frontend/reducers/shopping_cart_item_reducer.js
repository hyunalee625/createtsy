import {
  RECEIVE_SHOPPING_CART_ITEM,
  RECEIVE_SHOPPING_CART_ITEMS,
  REMOVE_SHOPPING_CART_ITEM,
} from "../actions/shopping_cart_item_actions";

const shoppingCartItemsReducer = (state= {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SHOPPING_CART_ITEM:
            newState = Object.assign({}, state);
            newState[action.item.id] = action.item
            return newState;
        case RECEIVE_SHOPPING_CART_ITEMS:
            return action.shoppingCartItems
        case REMOVE_SHOPPING_CART_ITEM:
            newState = Object.assign({}, state);
            delete newState[action.id]
            return action.items
        default:
            return state;
    }
}

export default shoppingCartItemsReducer;