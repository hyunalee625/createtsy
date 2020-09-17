import React from 'react';
// import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// , Redirect, Switch, Link, HashRouter
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProductIndexContainer from './products/product_index_container';
import ProductShowContainer from './products/product_show_container';
import ShoppingCartItemContainer} from './shopping_cart_items/shopping_cart_item_container'
// import { AuthRoute } from '../util/route_util';
import NavContainer from './nav/nav_container';
import LandingContainer from './landing/landing_container';
import Modal from './modal/modal'



const App = () => (
  <div>
    <Modal />
    <header>
      <div className="navbar-container">
        <a href="/">
          <h1 className="createtsy-logo">creatEtsy</h1>
        </a>
        <div>
          <NavContainer />
        </div>
      </div>
    </header>
    <Switch>
      <Route path="/login" exact component={LoginFormContainer} />
      <Route path="/signup" exact component={SignupFormContainer} />
      <Route
        path="/products/:productId"
        exact
        component={ProductShowContainer}
      />
      <Route path="/">
        <div>
          <LandingContainer />
          <ProductIndexContainer />
        </div>
      </Route>
      <Route path="/shopping-cart" exact component={ShoppingCartItemContainer}></Route>
    </Switch>
  </div>
);

export default App;
