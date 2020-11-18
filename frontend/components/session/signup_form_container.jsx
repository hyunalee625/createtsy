import React from 'react';
import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
    // debugger
    return {
    errors: errors.session,
    formType: "Sign Up",
    }
}

const mdp = dispatch => {
    return {
      actionForm: (user) => dispatch(signup(user)),
      otherForm: (
        <button
          type="button"
          onClick={() => dispatch(openModal("login"))}
          className="signin-button"
        >
          Sign in
        </button>
      ),
      closeModal: () => dispatch(closeModal()),
      demoAction: (demoUser) => dispatch(login(demoUser)),
      clearErrors: () => dispatch(clearErrors()),
    };
}

export default connect(msp, mdp)(SessionForm)