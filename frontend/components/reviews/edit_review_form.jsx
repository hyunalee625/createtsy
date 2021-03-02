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
      .updateReview(this.state)
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


  render() {
      return (
            <div>test</div>
        )
    } 
}

export default withRouter(ReviewForm);