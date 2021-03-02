import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions';
import EditReviewForm from './edit_review_form';

const msp = (state, ownProps) => {
    return review = {
        review,
        user_id: state.session.id,
        product_id: ownProps.match.params.productId,
        rating: 0
    }
}

const mdp = dispatch => {
    debugger
    return {
        updateReview: review => dispatch(updateReview(review))
    }
}

export default connect(msp, mdp)(EditReviewForm); 
