import React from "react";

const Nav = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="navbar-container">
            <div className="right-nav-buttons">
                <button className="nav-signin-button" onClick={ () => openModal('login')}>Sign in</button>
                <div className="shopping-cart-icon">
                    <a href="/cart"><img src="https://www.iconsdb.com/icons/preview/red/shopping-cart-xxl.png" /></a>
                </div>
            </div>
        </nav>
    )
    const personalGreeting = () => (  // when logged in
        <hgroup className="header">
            <h3 className="greeting">Welcome back, {currentUser.first_name}!</h3>
            <button className="nav-signout-button" onClick={ logout }>Sign out</button>
        </hgroup>
    )

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks()

}

export default Nav;