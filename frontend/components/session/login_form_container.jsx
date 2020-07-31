import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
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
            <button type="button" onClick={() => dispatch(openModal('signup'))} className="register-button">
                Register
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoAction: demoUser => dispatch(login(demoUser)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(msp, mdp)(SessionForm);