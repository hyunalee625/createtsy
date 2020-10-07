// keep track of all our users

import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions' 

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    // let newState = Object.assign({}, oldState)
    switch (action.type) {
      case RECEIVE_USER:
        return Object.assign({}, oldState, { [action.user.id]: action.user });
      case RECEIVE_USER_PROFILE:
        return Object.assign({}, oldState, { [action.user.id]: action.user });
      default:
        return oldState;
    }
}

export default usersReducer;