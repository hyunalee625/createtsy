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
      id: this.props.review.id,
      editClick: false,
      review: {
        body: '',
        product_id: this.props.match.params.productId,
        rating: 0
    }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .updateReview(this.props.review)
      .then(() => {this.setState({ editClick: false })})
  }

  update(field) {
        return (e) => {
            if (field === "rating") {
                this.setState({ review: {[field]: e} });
            } else {
                this.setState({ review: {[field]: e.target.value} });
            }

        }
    }

  handleForm () {
  this.setState({ formStatus: true });
  };

  handleEdit(e) {
    e.preventDefault();
    this.props
      .updateReview(this.props.review) 

    this.setState({ editClick: true })
  } 

  // handleDelete(e) {
  //   e.preventDefault();
  //   this.props
  //     .deleteReview(this.props.review)
  //     // .then(fetchReviews(this.props.product_id))
  //     .then(() => this.props.history.push(`/products`))
  // }
  

  
  render () {
    // debugger
    let {review} = this.props;
    let currentReview = <div> <Rating
          className="rating"
          emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
          fullSymbol={<FontAwesomeIcon icon={fullStar} />}
          initialRating={review.rating}
          readonly={true}
        />
        <p className="review-body">{review.body}</p>
        </div>

    let editDelete = <div><div className="review-btns">
            <button className="review-edit-btn"
            onClick={this.handleEdit}
            >
              Edit
            </button>

          </div>
          <div>
            <button className="review-delete-btn"
            onClick={() => this.props.deleteReview(review)}
            >
              Delete
            </button>
          </div>
        </div>
    
    if (this.state.editClick === true) {
      editDelete = null;

      currentReview = 
      <form onSubmit={this.handleSubmit}>
        <Rating
          className="rating"
          emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
          fullSymbol={<FontAwesomeIcon icon={fullStar} />}
          initialRating={review.rating}
          onChange={this.update('rating')}
        />
        <textarea onChange={this.update('body')} value={review.body}></textarea>
        <button
                className="review-save"
                >
                Save
        </button>
      </form>

      

    }

    return (
      <div className="review-index-item-container">
      <div>
          <div className="review-user">{review.user}</div>
          <p className="review-date">{moment($`{review.created_at}`).format("MMMM D, YYYY")} </p>
          {currentReview}
        </div>
        {editDelete}
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