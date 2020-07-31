// keep track of error messages

import { RECEIVE_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    //  debugger
    switch (action.type) {
      case RECEIVE_ERRORS:
        // debugger
        return action.errors;
      case RECEIVE_USER:
        return []; // clears out the errors
      case CLEAR_ERRORS:
        return action.errors;
      default:
        return state;
    }
}

export default sessionErrorsReducer;
