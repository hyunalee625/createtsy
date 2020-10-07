import React from 'react';
import { withRouter } from 'react-router-dom'
import Rating from 'react-rating';
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const ReviewIndexItem = ({review}) => {
    return (
      <div>
        <div>
          {review.user}
          <p>{moment($`{review.updated_at}`).format("MMMM D, YYYY")} </p>
        </div>
        <Rating
          className="rating"
          emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
          fullSymbol={<FontAwesomeIcon icon={fullStar} />}
          initialRating={review.rating}
          readonly={true}
        />
        <p>{review.body}</p>
      </div>
    );
}

export default withRouter(ReviewIndexItem);