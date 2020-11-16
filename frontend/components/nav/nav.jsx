import React from "react";
import {Link} from 'react-router-dom'


const Nav = ({ currentUser, logout, openModal }) => {
  // debugger
    const sessionLinks = () => (
      <nav className="navbar-container">
        <div className="right-nav-buttons">
          <button
            className="nav-signin-button"
            onClick={() => openModal("login")}
          >
            Sign in
          </button>
          <div className="shopping-cart-icon">
            <Link to="/shopping_cart_items">
              <img src={window.shopping_cart} />
            </Link>
          </div>
        </div>
      </nav>
    );
    // debugger
    const personalGreeting = () => (
      // when logged in
      <nav className="navbar-container">
        <div className="nav-right-buttons">
          <button className="nav-signout-button" onClick={logout}>
            Sign out
          </button>
          <div className="shopping-cart-icon">
            <Link to="/shopping_cart_items">
              <img src={window.shopping_cart} />
            </Link>
          </div>
        </div>
        <br />
      </nav>
    );
    // debugger
    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks()

}

export default Nav;