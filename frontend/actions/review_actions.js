import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_ONE_REVIEW = "RECEIVE_ONE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const receiveOneReview = (review) => {
  return {
    type: RECEIVE_ONE_REVIEW,
    review
  };
};

export const receiveAllReviews = (reviews) => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews,
  };
};

export const removeReview = (updatedReviews) => {
    return {
        type: REMOVE_REVIEW,
        updatedReviews
    }
}

export const receiveReviewErrors = errors => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
}

// thunk

export const fetchReviews = (productId) => dispatch => {
    return ReviewAPIUtil.fetchReviews(productId)
      .then(reviews => dispatch(receiveAllReviews(reviews))
      ,errors => (dispatch(receiveReviewErrors(errors.responseJSON))
    ));
}

export const fetchReview = (reviewId) => dispatch => {
  return ReviewAPIUtil.fetchReview(reviewId).then((review) => dispatch(receiveOneReview(review)))
}

export const createReview = (review) => (dispatch) => {
  return ReviewAPIUtil.createReview(review).then(
    (review) => dispatch(receiveOneReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );
};

export const updateReview = (review) => (dispatch) => {
  // debugger
  return ReviewAPIUtil.updateReview(review).then(
    (review) => dispatch(receiveOneReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );
};

export const deleteReview = (review) => (dispatch) => {
  return ReviewAPIUtil.deleteReview(review).then(
    (review) => dispatch(removeReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );
};