import * as ShoppingCartItemAPIUtil from '../util/shopping_cart_item_api_util';

export const RECEIVE_SHOPPING_CART_ITEM = "RECEIVE_SHOPPING_CART_ITEM";
export const RECEIVE_SHOPPING_CART_ITEMS = "RECEIVE_SHOPPING_CART_ITEMS";
export const REMOVE_SHOPPING_CART_ITEM = "REMOVE_SHOPPING_CART_ITEM";
// export const RECEIVE_SHOPPING_CART_ERRORS = "RECEIVE_SHOPPING_CART_ERRORS";

const receiveShoppingCartItem = (cartItem) => {
  return {
    type: RECEIVE_SHOPPING_CART_ITEM,
    cartItem: cartItem,
  };
};

const receiveShoppingCartItems = (cartItems) => {
  return {
    type: RECEIVE_SHOPPING_CART_ITEMS,
    cartItems,
  };
};

const removeShoppingCartItem = (cartItemId) => {
    return {
        type: REMOVE_SHOPPING_CART_ITEM,
        cartItemId
    }
}

// const receivceShoppingCartErrors = errors => {
//     return {
//         type: RECEIVE_SHOPPING_CART_ERRORS,
//         errors
//     }
// }

// thunk action creators 

export const fetchCartItems = () => dispatch => {
    return ShoppingCartItemAPIUtil.fetchCartItems().then((cartItems) =>
      dispatch(receiveShoppingCartItems(cartItems))
    );
}

export const createCartItem = (cartItem) => (dispatch) => {
  return ShoppingCartItemAPIUtil.createCartItem(cartItem).then((cartItem) =>
    dispatch(receiveShoppingCartItem(cartItem))
  );
};

export const updateCartItem = (cartItem) => (dispatch) => {
  return ShoppingCartItemAPIUtil.updateCartItem(cartItem).then((cartItem) =>
    dispatch(receiveShoppingCartItem(cartItem))
  );
};

export const deleteCartItem = (cartItemId) => (dispatch) => {
  return ShoppingCartItemAPIUtil.deleteCartItem(cartItemId).then(() =>
    dispatch(removeShoppingCartItem(cartItemId))
  );
};