import React from 'react';
import { withRouter } from 'react-router-dom'
import Rating from 'react-rating';


class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
      return (
        <div className="review-index-container">
          <div className="review-index">
            <h3>{review.user}</h3>
            <Rating
              className="rating"
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              initialRating={review.rating}
              readonly={true}
            />
            <p>{review.body}</p>
          </div>
        </div>
      );
  }


}

export default withRouter(ReviewIndexItem);