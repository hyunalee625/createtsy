import { RECEIVE_ONE_PRODUCT, RECEIVE_PRODUCT_ERRORS } from "../actions/product_action";

const productErrorsReducer = ( oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      return action.errors;
    case RECEIVE_ONE_PRODUCT:
      return []
    default:
      return oldState;
  }
};

export default productErrorsReducer;
