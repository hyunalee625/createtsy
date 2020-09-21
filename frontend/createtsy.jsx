import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"
import * as sessionAPIUtil from './util/session_api_util';
import * as productAPIUtil from './util/product_api_util';
import * as reviewAPIUtil from './util/review_api_util'
import * as shoppingCartItemAPIUtil from './util/shopping_cart_item_api_util';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = sessionAPIUtil.signup;
    window.login = sessionAPIUtil.login;
    window.logout = sessionAPIUtil.logout;
    window.getAllProducts = productAPIUtil.getAllProducts;
    window.getOneProduct = productAPIUtil.getOneProduct;
    window.fetchReviews = reviewAPIUtil.fetchReviews;
    // window.getAllCartItems = shoppingCartItemAPIUtil.getAllCartItems;

    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});