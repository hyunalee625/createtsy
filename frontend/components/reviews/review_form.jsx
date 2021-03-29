import React from "react";
import Rating from "react-rating";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        review: {
            id: this.props.review.id,
            user_id: this.props.review.user_id,
            product_id: this.props.review.product_id,
        },
    };

    // this.state = this.props.review
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


    // new_review_form() {
    //     if (this.props.currentUser != this.props.user_id) {
    //         return (
    //         <form onSubmit={this.handleSubmit}>
    //             <div className="review-form">
    //                 <em>Write a Review</em>
    //                 <br/>
    //                 <Rating
    //                     emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
    //                     fullSymbol={<FontAwesomeIcon icon={fullStar} />}
    //                     initialRating={this.state.rating}
    //                     onChange={this.update('rating')}
    //                     />
    //                 <div>
    //                     <textarea onChange={this.update('body')} value={this.state.body}></textarea>
    //                 </div>
    //                 <button
    //                     className="review-save"
    //                     // onClick={() => alert("Must be logged in!")}
    //                 >
    //                     Save
    //                 </button>
    //             </div>
    //         </form>
    //     )}
    // }


  render() {
    if (this.props.currentUser != this.props.review.user_id) {
        debugger

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
                    <button
                        className="review-save"
                        // onClick={() => alert("Must be logged in!")}
                    >
                        Save
                    </button>
                    {/* <div>{this.not_logged_in()}</div> */}
                </div>
            </form>
        )}
    } 
}

export default withRouter(ReviewForm);
