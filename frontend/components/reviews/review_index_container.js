import { connect } from "react-redux";
import {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../../actions/review_actions";
import ReviewIndex from "./review_index";

const msp = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
    userId: state.entities.users[state.session.id].id,
    productId: ownProps.product_id
  };
};

const mdp = (dispatch) => {
  return {
    getAllReviews: (productId) => dispatch(getAllReviews(productId)),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (review) => dispatch(deleteReview(review)),
  };
};

export default connect(msp, mdp)(ReviewIndex);
