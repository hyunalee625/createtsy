import * as productAPIUtil from "../util/product_api_util";

export const RECEIVE_ONE_PRODUCT = "RECEIVE_ONE_PRODUCT";
export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

// action creators
export const receiveOneProduct = product => {
  return {
    type: RECEIVE_ONE_PRODUCT,
    product
  }
};

export const receiveAllProducts = products => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    products
  }
};


export const receiveProductErrors = (errors) => {
    return {
        type: RECEIVE_PRODUCT_ERRORS,
        errors
    }
};

// thunk action creators

export const getOneProduct = productId => dispatch => {
  // debugger
  return productAPIUtil.getOneProduct(productId).then(
    (product) => dispatch(receiveOneProduct(product)),
    (error) => dispatch(receiveProductErrors(error.responseJSON))
  );
};

export const getAllProducts = () => (dispatch) => {
  // debugger
  return productAPIUtil.getAllProducts().then(products => { 
      // debugger
      return dispatch(receiveAllProducts(products))
    } 
    // , error => (dispatch(receiveProductErrors(error.responseJSON))
  )
    // )
};



