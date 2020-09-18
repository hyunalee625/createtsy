import React from "react";
import {Link} from 'react-router-dom'

const Nav = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
      <nav className="navbar-container">
        {/* <div className="left-nav-">
        <h3 className="createtsy-logo">creatEtsy</h3>
      </div> */}
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
        {/* <div>
          <h3 className="welcome-back">
            Welcome back, {currentUser.first_name}!
          </h3>
        </div> */}
      </nav>
    );

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks()

}

export default Nav;