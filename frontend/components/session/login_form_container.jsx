import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import  { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
    // debugger
    return {
    errors: errors.session,
    formType: "Sign in",
    // navLinkSignUp: <Link to="/signup">Register</Link>
    }
}

const mdp = dispatch => {
    // debugger
    return {
        actionForm: user => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Register
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(SessionForm);