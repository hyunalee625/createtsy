import {
  RECEIVE_ONE_PRODUCT,
  RECEIVE_ALL_PRODUCTS,
} from "../actions/product_actions";

const productsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
      case RECEIVE_ONE_PRODUCT:
        const newState = { [action.product.id]: action.product };
        return Object.assign({}, oldState, newState);
      case RECEIVE_ALL_PRODUCTS:
        return action.products;
      default:
        return oldState;
    }
}

export default productsReducer;