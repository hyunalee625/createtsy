import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const msp = ({errors}) => ({
    errors: errors.session,
    formType: "Sign Up",
    navLinkSignIn: <Link to="/login">Sign in</Link>

})

const mdp = dispatch => {
    return {
        sessionForm: user => dispatch(signup(user))
    }
}

export default connect(msp, mdp)(SessionForm)