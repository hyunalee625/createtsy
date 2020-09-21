import { RECEIVE_ONE_REVIEW, RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

const ReviewErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ONE_REVIEW:
            return [];
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
}

export default ReviewErrorsReducer;