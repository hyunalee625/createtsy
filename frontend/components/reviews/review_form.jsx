import React from "react";
import Rating from "react-rating";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
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

    not_logged_in() {
        if (!this.props.currentUser.id) {
            debugger
            return (
            <div>
                <button
                        className="review-save"
                        onClick={() => alert("Must be logged in!")}
                    >
                        Save
                </button>
            </div>
            )
        } 
    }


  render() {
      return (
            <form onSubmit={this.handleSubmit}>
                <div className="review-form">
                    <em>Write a Review</em>
                    <br/>
                    <Rating
                        emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                        fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                        initialRating={this.state.rating}
                        onChange={this.update('rating')}
                        />
                    <div>
                        <textarea onChange={this.update('body')} value={this.state.body}></textarea>
                    </div>
                    {/* <button
                        className="review-save"
                        // onClick={() => alert("Must be logged in!")}
                    >
                        Save
                    </button> */}
                    <div>{this.not_logged_in}</div>
                </div>
            </form>
        )
    } 
}

export default withRouter(ReviewForm);
