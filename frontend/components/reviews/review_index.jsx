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

    // avgRating() {
    //     let sum = 0;

    //     this.props.reviews.forEach((review) => {
    //         sum += review.rating;
    //     })

    //     return Math.ceil(sum / (this.props.reviews.length));
    //     // return (sum / (this.props.reviews.length));

    // }

    // renderAvgRating() {
    //     return (
    //         <div>
    //             <Rating
    //                 className="review-index-rating"
    //                 emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
    //                 fullSymbol={<FontAwesomeIcon icon={fullStar} />}
    //                 initialRating={this.avgRating()}
    //                 readonly={true}/>
    //         </div>
    //     )
    // }

    handleDelete(review) {
        // debugger
        this.props
        .deleteReview(review).then(reviews => {
            // debugger
            this.setState({
                reviews: reviews.updatedReviews.data,
                reviewsLength: reviews.updatedReviews.data.length
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
                        // productId={review.product_id}
                        updateReview={this.props.updateReview}
                        deleteReview={this.props.deleteReview}
                        fetchReviews={this.props.fetchReviews}
                    />
                
            )
        })

        return (
            <div className="reviews-container">
                <div className="reviews-sub-container">
                <div className="reviews-header">Reviews ({this.state.reviewsLength ? this.state.reviewsLength : currentReviewsLength})</div>
                <br />
                    {/* <div className="avg-rating">{this.renderAvgRating()}</div> */}
                    {reviews}
                </div>
            </div>
        )
    }
}

export default ReviewIndex;


// BACK UP //

// import React from 'react';
// import Rating from 'react-rating';
// import moment from "moment";
// import ReviewIndexItem from './review_index_item';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";


// class ReviewIndex extends React.Component {
//     constructor(props){
//         super(props);

//         // this.state = {
//         //     formStatus: false
//         // }

//         // this.handleForm = this.handleForm.bind(this);

//     }

//     componentDidMount(){
//         this.props.fetchReviews(this.props.product_id);
//     }

//     // handleForm () {
//     // this.setState({ formStatus: true });
//     // };


//     avgRating() {
//         let sum = 0;

//         this.props.reviews.forEach((review) => {
//             sum += review.rating;
//         })

//         return Math.ceil(sum / (this.props.reviews.length));
//         // return (sum / (this.props.reviews.length));

//     }

//     renderAvgRating() {
//         return (
//             <div>
//                 <Rating
//                     className="review-index-rating"
//                     emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
//                     fullSymbol={<FontAwesomeIcon icon={fullStar} />}
//                     initialRating={this.avgRating()}
//                     readonly={true}/>
//             </div>
//         )
//     }

//     // editForm(e) {
//     //     debugger
//     //     if (this.state.formStatus && this.props.user_id === e.user_id) {
//     //         return (
//     //             <form onSubmit={this.handleSubmit}>
//     //                 <input
//     //                   className="input-boxes"
//     //                   type="text"
//     //                   value={e.body}
//     //                 //   onChange={this.update("body")}
//     //                 />
//     //             </form>
//     //         )
//     //     }
//     // };

//     render() {
//     //     const reviews = this.props.reviews.map(review => {
        

//     //         return(
//     //             <div className="review-index-item-container">
//     //     <div>
//     //       <div className="review-user">{review.user}
//     //       </div>
//     //     </div>
//     //       <p className="review-date">{moment($`{review.created_at}`).format("MMMM D, YYYY")} </p>
//     //     <Rating
//     //       className="rating"
//     //       emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
//     //       fullSymbol={<FontAwesomeIcon icon={fullStar} />}
//     //       initialRating={review.rating}
//     //       readonly={true}
//     //     />
//     //     <p className="review-body">{review.body}</p>
        
//     //     <div className="review-btns">
//     //       <button className="review-edit-btn"
//     //       onClick={() => this.handleForm()}
//     //       >
//     //         Edit
//     //       </button>
//     //         <div>{this.editForm(review)}</div>
//     //         {/* <div>{this.reviewDelete()}</div> */}
//     //       {/* <button className="review-delete-btn" 
//     //         onClick={() => 
//     //         this.props
//     //           .deleteReview(this.props.review.id)
//     //           .then(() => this.props.history.push("/shopping_cart_items"))
//     //           }
//     //         >
//     //           Delete
//     //       </button> */}
          
//     //     </div>
//     //     <br/>
//     //   </div>
//     //             // <div className="reviews-index-container">
//     //             //     <ReviewIndexItem 
//     //             //         key={review.id}
//     //             //         review={review}
//     //             //         // productId={review.product_id}
//     //             //     />
//     //             // </div>
//     //         )
//     //     })

//         return (
//             <div className="reviews-container">
//                 <div className="reviews-sub-container">
//                 <div className="reviews-header">Reviews ({this.props.reviews.length})</div>
//                 <br />
//                     <div className="avg-rating">{this.renderAvgRating()}</div>
//                     {reviews}
//                 </div>
//             </div>
//         )
//     }
// }

// export default ReviewIndex;