import {
  RECEIVE_ONE_PRODUCT,
  RECEIVE_ALL_PRODUCTS,
} from "../actions/product_actions";

const productsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
      case RECEIVE_ALL_PRODUCTS:
        debugger
        return action.products;
      case RECEIVE_ONE_PRODUCT:
        const newProduct = { [action.product.id]: action.product };
        return Object.assign({}, oldState, newProduct);
      default:
        return oldState;
    }
}

export default productsReducer;