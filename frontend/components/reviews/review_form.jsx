import React from "react";
import Rating from "react-rating";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createReview(this.state)
    .then(() => {this.setState({ 'body': "" })
    });
  }

  update(field) {
        return (e) => {
            if (field === "rating") {
                this.setState({ [field]: e });
            } else {
                this.setState({ [field]: e.target.value });
            }

        }
    }

    userReviewed() {
      const { reviews, user_id } = this.props;
      for (let key in reviews) {
          const subObj = reviews[key];
          if (subObj.user_id === user_id){
              return true; 
          }
      }
      return false; 
  }

  render() {
    return this.props.user_id && !this.userReviewed() && (
            <form onSubmit={this.handleSubmit}>
                <div className="review-form">
                    <h1>Write a Review</h1>
                    
                    <Rating
                        emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                        fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                        initialRating={this.state.rating}
                        onChange={this.update('rating')}
                        />
                    <div>
                        <textarea onChange={this.update('body')} value={this.state.body}></textarea>
                    </div>
                    <button>Save</button>
                </div>
            </form>
        )
    } 
}

export default withRouter(ReviewForm);
