import {
  RECEIVE_ONE_PRODUCT,
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_SEARCH_PRODUCT,
} from "../actions/product_actions";

import {
  RECEIVE_ONE_REVIEW
} from '../actions/review_actions'


const productsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState);
    switch (action.type) {
      case RECEIVE_ONE_PRODUCT:
        return Object.assign(newState, { [action.product.id]: action.product });
      case RECEIVE_ALL_PRODUCTS:
        return action.products;
      case RECEIVE_SEARCH_PRODUCT:
        if (!action.search) {
          return {};
        } else {
          return action.search;
        }
      case RECEIVE_ONE_REVIEW:
        if (!action.product) {
          return oldState;
        } else {
          return Object.assign({}, oldState, {
            [action.product.id]: action.product,
          });
        }
      default:
        return oldState;
    }
}

export default productsReducer;