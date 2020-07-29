import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const msp = ({ errors }) => ({
    errors: errors.session,
    formType: "Sign in",
    navLink: <Link to="/signup">Register</Link>

})

const mdp = dispatch => {
    return {
        sessionForm: user => dispatch(login(user))
    }
}

export default connect(msp, mdp)(SessionForm);