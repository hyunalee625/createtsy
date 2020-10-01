import {RECEIVE_ONE_REVIEW, RECEIVE_ALL_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_ONE_PRODUCT } from '../actions/product_actions';

const ReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ONE_REVIEW:
            return Object.assign({}, oldState, {[action.review.id]: action.review})
        case RECEIVE_ALL_REVIEWS:
            return action.reviews;
        case RECEIVE_ONE_PRODUCT:
            return Object.assign({}, oldState, action.reviews)
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state);
            delete newState[action.reviewId];
            return newState;
        default:
            return oldState;
    }
}

export default ReviewsReducer;