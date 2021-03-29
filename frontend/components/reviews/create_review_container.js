import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form'

const msp = (state, ownProps) => {
    // debugger
    const review = {
        body: '',
        user_id: state.session.id,
        product_id: ownProps.match.params.productId,
        rating: 0
    }

    // debugger
    return {
        review,
        reviews: state.entities.reviews,
        user_id: state.session.id,
        // currentUser: state.session.user,
        product_id: state.entities.products.id,
    }

}

const mdp = dispatch => {
    return {
        createReview: review => dispatch(createReview(review)),

    }
}

export default withRouter(connect(msp, mdp)(ReviewForm))