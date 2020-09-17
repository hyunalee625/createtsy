import * as ShoppingCartItemAPIUtil from '../util/shopping_cart_item_api_util';

export const RECEIVE_SHOPPING_CART_ITEM = "RECEIVE_SHOPPING_CART_ITEM";
export const RECEIVE_SHOPPING_CART_ITEMS = "RECEIVE_SHOPPING_CART_ITEMS";
export const REMOVE_SHOPPING_CART_ITEM = "REMOVE_SHOPPING_CART_ITEM";
export const RECEIVE_SHOPPING_CART_ERRORS = "RECEIVE_SHOPPING_CART_ERRORS";

const receiveShoppingCartItem = (item) => {
    return {
        type: RECEIVE_SHOPPING_CART_ITEM,
        item
    }
}

const receiveShoppingCartItems = (items) => {
    return {
        type: RECEIVE_SHOPPING_CART_ITEMS,
        items
    }
}

const removeShoppingCartItem = id => {
    return {
        type: REMOVE_SHOPPING_CART_ITEM,
        shoppingCartItemId: id
    }
}

const receivceShoppingCartErrors = errors => {
    return {
        type: RECEIVE_SHOPPING_CART_ERRORS,
        errors
    }
}

// thunk action creators 

export const getOneCartItem = id => dispatch => {
    return ShoppingCartItemAPIUtil.getOneCartItem(id)
        .then(item => dispatch(receiveShoppingCartItem(item)))
}

export const getAllCartItems = () => dispatch => {
    return ShoppingCartItemAPIUtil.getAllCartItems()
        .then(items => dispatch(receiveShoppingCartItems(items)))
}

export const createCartItem = item => dispatch => {
    return ShoppingCartItemAPIUtil.createCartItem(item)
        .then(item => dispatch(receiveShoppingCartItem(item)))
}

export const updateCartItem = (data, id) => dispatch => {
    return ShoppingCartItemAPIUtil.updateCartItem(data, id)
        .then(item => dispatch(receiveShoppingCartItem(item)))
}

export const deleteCartItem = id => dispatch => {
    return ShoppingCartItemAPIUtil.deleteCartItem(id)
        .then(item => dispatch(removeShoppingCartItem(item)))
}