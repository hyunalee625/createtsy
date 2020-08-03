import React from 'react';
// import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// , Redirect, Switch, Link, HashRouter
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProductIndexContainer from './products/product_index_container';
// import { AuthRoute } from '../util/route_util';
import NavContainer from './nav/nav_container';
import LandingContainer from './landing/landing_container';
import Modal from './modal/modal'

// console.log(process.env.REACT_APP_CREATETSY_API_KEY);


const App = () => (
  <div>
    <Modal />
    <header>
      <div className="navbar-container">
        <div className="logo">
          <a href="/" className="createtsy-logo">
            creatEtsy
          </a>
        </div>
        <div>
          <NavContainer />
        </div>
      </div>
    </header>
    <div>
      <LandingContainer />
    </div>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/" component={ProductIndexContainer} />
      <Route path="/"></Route>
    </Switch>
  </div>
);

export default App;
