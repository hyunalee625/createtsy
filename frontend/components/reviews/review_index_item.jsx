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
      // id: this.props.review.id,
      editClick: false,
      updatedReview: null,
      review: {
        id: this.props.review.id,
        body: this.props.review.body,
        user_id: this.props.review.user_id,
        product_id: this.props.review.product_id,
        rating: this.props.review.rating
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleForm = this.handleForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.editDelete = this.editDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .updateReview(this.state.review)
      .then((review) => {this.setState({ editClick: false })
        })
  }

  update(field) {

      return (e) => {
          if (field === 'rating') {
              const updatedReview = Object.assign({}, this.state.review, {[field]: e});
              // this.setState({review: updatedReview}, () => console.log(this.state.review));
              this.setState({review: updatedReview})
            } else {
              const updatedReview = Object.assign({}, this.state.review, {[field]: e.target.value});
              // this.setState({review: updatedReview}, () => console.log(this.state.review));
              this.setState({review: updatedReview});

            }
      }
  }

  // handleForm () {
  // this.setState({ formStatus: true });
  // };

  handleEdit(e) {
    e.preventDefault();
  
    this.setState({ editClick: true })
  } 

  editDelete() {
    
    if (this.state.editClick != true) {
    if (this.props.currentUser === this.props.review.user_id) {
      // debugger
        return (<div>
          <div className="review-btns">
              <button className="review-edit-btn"
              onClick={this.handleEdit}
              >
                Edit
              </button>

              <button className="review-delete-btn"
              onClick={() => this.props.deleteReview(this.props.review)}
              >
                Delete
              </button>
          </div>
        </div>
        )
      }
    }
  }

  
  render () {
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


    
    if (this.state.editClick === true) {

      currentReview = 
      <form onSubmit={this.handleSubmit}>
        <Rating
          className="rating"
          emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
          fullSymbol={<FontAwesomeIcon icon={fullStar} />}
          initialRating={review.rating}
          onChange={this.update('rating')}
        />
        <div className="review-edit-form">
        <textarea onChange={this.update('body')} defaultValue={review.body}></textarea>
        </div>
        <div>
          <button
                  className="review-save-btn"
                  >
                  Save
          </button>
        </div>
      </form>
    } 

    return (
      
      <div className="review-index-item-container">
      <div>
          <div className="review-user">{review.user}</div>
          <p className="review-date">{moment($`{review.dateToFormat}`).format("MMMM D, YYYY")} </p>
          {currentReview}
        </div>
        {this.editDelete()}
        <br/>
      </div>
    );
  }
}


export default withRouter(ReviewIndexItem);