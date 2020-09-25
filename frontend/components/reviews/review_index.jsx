import React from 'react';
import ReviewIndexItem from './review_index_item';
import Rating from 'react-rating';


class ReviewIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.product_id);
    }

    render() {
        const reviews = this.props.reviews.map(review => {
            
            return(
                <div className="reviews-container">
                    <ReviewIndexItem 
                        key={review.id}
                        review={review}
                        productId={review.product_id}
                    />

                    {/* <Rating 
                        rating={this.props.rating}
                        readonly={true}
                    /> */}
                </div>
            )
        })

        return (
            <div>
                <div>
                    {reviews}
                </div>
            </div>
        )
    }
}

export default ReviewIndex;