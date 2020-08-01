import { RECEIVE_ONE_PRODUCT, RECEIVE_ALL_PRODUCTS } from '../actions/product_action';

const productsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_ONE_PRODUCT:
            return Object.assign({}, oldState, {[action.product.id]: action.product })
        default:
            return oldState;
    }
}

export default productsReducer;