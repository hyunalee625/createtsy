import React from 'react';
import { withRouter } from 'react-router-dom'
import Rating from 'react-rating';
import Moment from 'react-moment'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const ReviewIndexItem = ({review}) => {
    return (
      <div>
        <div>
          {review.user}
          <Moment parse="MM DD, YY">{review.updated_at}</Moment>
        </div>
        <Rating
          className="rating"
          // emptySymbol={<FontAwesomeIcon icon={regularStar} />}
          // fullSymbol={<FontAwesomeIcon icon={solidStar} />}
          initialRating={review.rating}
          readonly={true}
        />
        <p>{review.body}</p>
      </div>
    );
}

export default withRouter(ReviewIndexItem);