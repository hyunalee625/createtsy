import { connect } from "react-redux";
import {
  fetchReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../../actions/review_actions";
import ReviewIndex from "./review_index";

const msp = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
    // userId: state.entities.users[state.session.id].id,
    product_id: ownProps.product_id
  };
};

const mdp = (dispatch) => {
  return {
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (review) => dispatch(deleteReview(review)),
  };
};

export default connect(msp, mdp)(ReviewIndex);


//////////////
// import React from "react";
// import { connect } from "react-redux";

// const Review = ({ review, user }) => {
//   const { rating, body } = review;
//   return (
//     <div>
//       <ul>
//         <li>Rating: {rating}</li>
//         <li>
//           {body} - by {user.first_name}
//         </li>
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = ({ entities: { users } }, { review }) => {
//   return {
//     user: users[review.user_id],
//   };
// };

// export default connect(mapStateToProps)(Review);
