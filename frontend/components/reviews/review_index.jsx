import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewIndex extends React.Component {
    render() {
        const reviews = this.props.reviews.map(review => {
            
            return(
                <div className="reviews-container">
                    <ReviewIndexItem 
                        key={review.id}
                        review={review}
                        productId={review.product_id}
                    />
                </div>
            )
        })

        return(
            <div> { reviews }</div>
        )
    }
}

export default withRouter(ReviewIndex)