import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import ShoppingCartItemContainer from '../shopping_cart_items/shopping_cart_item_container';
import {Link} from 'react-router-dom'


function Modal({modal, closeModal}) {
    if(!modal) {
        return null;
    }
    
    let component;
    switch(modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'checkout':
            component = 
            <div>
                <h3>Thanks for shopping with us!</h3>
                <Link to="/">Back to main page</Link>
            </div>;
            break;
        default:
            return null;
    }
                
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
            {/* prevents further propagation of the current event in the capturing and bubbling phases. */}
                {component}
            </div>
        </div>
    )
}

const msp = state => {
    return {
        modal: state.ui.modal
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Modal);