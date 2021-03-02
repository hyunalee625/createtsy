import { connect } from "react-redux";
import {
  fetchReviews,
  updateReview,
  deleteReview,
} from "../../actions/review_actions";
import ReviewIndex from "./review_index";

const msp = (state, ownProps) => {
  // debugger
  return {
    reviews: Object.values(state.entities.reviews),
    user_id: state.session.id,
    product_id: ownProps.product_id
  };
};

const mdp = (dispatch) => {
  // debugger
  return {
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  };
};

export default connect(msp, mdp)(ReviewIndex);
