import {
  RECEIVE_ONE_PRODUCT,
  RECEIVE_ALL_PRODUCTS,
} from "../actions/product_actions";

import {
  RECEIVE_ONE_REVIEW
} from '../actions/review_actions'

import {
  RECEIVE_PRODUCT_SEARCH
} from '../actions/search_actions';

const productsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState);
    switch (action.type) {
      case RECEIVE_ONE_PRODUCT:
        return Object.assign(newState, {[action.product.id]: action.product});
      case RECEIVE_ALL_PRODUCTS:
        return action.products;
      case RECEIVE_PRODUCT_SEARCH:
        if (!action.products) {
          return {}
        } else {
          return action.products;
        }
      case RECEIVE_ONE_REVIEW:
        if (!action.product) {
          return oldState
        } else {
          return Object.assign({}, oldState, {[action.product.id]: action.product})
        }
      default:
        return oldState;
    }
}

export default productsReducer;