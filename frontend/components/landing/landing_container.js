import { connect } from 'react-redux';
import Landing from './landing';
import { login, logout } from '../../actions/session_actions';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
});


const mdp = dispatch => {
    return {
        login: currentUser => dispatch(login(currentUser)),
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Landing);