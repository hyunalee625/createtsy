import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
    // debugger
    return {
    errors: errors.session,
    formType: "Sign Up",
    // navLinkSignIn: <Link to="/login">Sign in</Link>
    }
}

const mdp = dispatch => {
    return {
        actionForm: user => dispatch(signup(user)),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('signup'))}>
        //         Register
        //     </button>
        // ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(SessionForm)