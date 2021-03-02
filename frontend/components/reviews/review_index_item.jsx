import React from 'react';
import { withRouter } from 'react-router-dom'
import Rating from 'react-rating';
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";


class ReviewIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formStatus: false,
      id: this.props.review.id
    }

    this.handleForm = this.handleForm.bind(this);
  }

  handleForm () {
  this.setState({ formStatus: true });
  };
  
  editForm(e) {
      // debugger
      if (this.state.formStatus && this.props.user_id === e.user_id) {
          return (
              <form onSubmit={this.handleSubmit}>
                  <input
                    className="input-boxes"
                    type="text"
                    value={e.body}
                  //   onChange={this.update("body")}
                  />
              </form>
          )
      }
  };

  reviewDelete() {
    debugger
    return (
        <button className="review-delete-btn" 
        onClick={() => this.props.deleteReview(this.props.review._id)
          // .then(() => this.props.history.push("/products/${revew.}"))
        }
        >
          Delete
      </button>
    )
  }

  
  render () {
    debugger
    let {review} = this.props;
    return (
      <div className="review-index-item-container">
        <div>
          <div className="review-user">{review.user}
          </div>
        </div>
          <p className="review-date">{moment($`{review.created_at}`).format("MMMM D, YYYY")} </p>
        <Rating
          className="rating"
          emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
          fullSymbol={<FontAwesomeIcon icon={fullStar} />}
          initialRating={review.rating}
          readonly={true}
        />
        <p className="review-body">{review.body}</p>
        <div className="review-btns">
          <button className="review-edit-btn"
          onClick={() => 
            this.props
              .updateReview(this.props.review.id)
              // .then(() => this.props.history.push("/reviews"))
              }
          >
            Edit
          </button>
          <div>{this.reviewDelete()}</div>
          {/* <button className="review-delete-btn" 
            onClick={() => 
            this.props
              .deleteReview(this.props.review.id)
              .then(() => this.props.history.push("/reviews"))
              }
            >
              Delete
          </button> */}
        </div>
        <br/>
      </div>
    );
  }
}

  

// const ReviewIndexItem = ({review}) => {
//     return (
//       <div className="review-index-item-container">
//         <div>
//           <div className="review-user">{review.user}
//           </div>
//         </div>
//           <p className="review-date">{moment($`{review.created_at}`).format("MMMM D, YYYY")} </p>
//         <Rating
//           className="rating"
//           emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
//           fullSymbol={<FontAwesomeIcon icon={fullStar} />}
//           initialRating={review.rating}
//           readonly={true}
//         />
//         <p className="review-body">{review.body}</p>
//         <div className="review-btns">
//           <button className="review-edit-btn"
//           onClick={() => 
//             this.props
//               .updateReview(this.props.review.id)
//               // .then(() => this.props.history.push("/reviews"))
//               }
//           >
//             Edit
//           </button>
//           <button className="review-delete-btn" 
//             onClick={() => 
//             this.props
//               .deleteReview(this.props.review.id)
//               .then(() => this.props.history.push("/reviews"))
//               }
//             >
//               Delete
//           </button>
//         </div>
//         <br/>
//       </div>
//     );
// }

export default withRouter(ReviewIndexItem);