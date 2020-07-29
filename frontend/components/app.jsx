import React from 'react';
// import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// , Redirect, Switch, Link, HashRouter
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import { AuthRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
            <h1>Createtsy!</h1>
        </header>
        <Switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
            <Route path="/"></Route>
        </Switch>
    </div>
);

export default App;