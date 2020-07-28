import React from "react";
import ReactDOM from "react-dom";
import * as sessionAPIUtil from './util/session_api_util'


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.signup = sessionAPIUtil.signup;
    window.login = sessionAPIUtil.login;
    window.logout = sessionAPIUtil.logout;
    window.getState = store.getState
    
    
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Createtsy!</h1>, root);
});