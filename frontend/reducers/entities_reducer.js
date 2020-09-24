// keep track of all the relational data in the app

import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import shoppingCartItemsReducer from './shopping_cart_item_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  shoppingCartItems: shoppingCartItemsReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;