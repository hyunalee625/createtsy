// import React from "react";
// import { connect } from "react-redux";

// const ReviewIndexItem = ({ review, user }) => {
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
//     reviews: Object.values(state.entities.reviews),
//     user: users[review.user_id],
//   };
// };

// export default connect(mapStateToProps)(ReviewIndexItem);
