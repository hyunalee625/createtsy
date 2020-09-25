import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import ReviewIndex from './review_index'

const msp = (state, ownProps) => {
    const review = {
        body: '',
        user_id: state.session.id,
        product_id: ownProps.match.params.productId,
        rating: 0
    }

    return {
        review: review,
        reviews: state.entities.review,
        errors: state.errors.comment,
        user_id: state.session.id,
        product_id: state.entities.products.id,
    }

}

const mdp = dispatch => {
    return {
        createReview: review => dispatch(createReview(review))
    }
}

export default withRouter(connect(msp, mdp)(ReviewIndex))