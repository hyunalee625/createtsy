// keep track of error messages

import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/session_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_USER:
            return []; // clears out the errors
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }
}
