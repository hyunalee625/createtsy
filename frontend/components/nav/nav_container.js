import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Nav from './nav';

const msp = ({ session, entities: {users} }) => {
    return {
        currentUser: users[session.id]
    }
}

const mdp = dispatch => {
    return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(Nav);