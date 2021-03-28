import React from 'react';
import Rating from 'react-rating';
import ReviewIndexItem from './review_index_item';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";


class ReviewIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: null,
            reviewsLength: 0
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.product_id);
    }


    handleDelete(review) {
        // debugger
        this.props
        .deleteReview(review).then(reviews => {
            // debugger
            this.setState({
                reviews: Object.values(reviews.updatedReviews),
                reviewsLength: Object.values(reviews.updatedReviews).length
            });
        });
    }


    render() {
        let currentReviews = this.state.reviews || this.props.reviews;
        let currentReviewsLength = this.props.reviews.length;

        const reviews = currentReviews.map((review) => {
            
            return(
                    <ReviewIndexItem 
                        key={review.id}
                        review={review}
                        currentUser={this.props.user_id}
                        updateReview={this.props.updateReview}
                        deleteReview={this.handleDelete}
                        fetchReviews={this.props.fetchReviews}
                    />
                
            )
        })

        return (
            <div className="reviews-container">
                <div className="reviews-sub-container">
                <div className="reviews-header">
                Reviews 
                ({this.state.reviewsLength ? this.state.reviewsLength : currentReviewsLength})</div>
                <br />
                    {/* <div className="avg-rating">{this.renderAvgRating()}</div> */}
                    {reviews}
                </div>
            </div>
        )
    }
}

export default ReviewIndex;




