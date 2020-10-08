import { connect } from 'react-redux';
import ProductShow from './product_show';
import { getOneProduct } from '../../actions/product_actions';
import { fetchUser } from "../../actions/user_actions";
import { createCartItem } from '../../actions/shopping_cart_item_actions';
import { deleteReview } from '../../actions/review_actions';



const msp = (state, ownProps ) => {
    // let productId = ownProps.match.params.productId;
    let product = state.entities.products[ownProps.match.params.productId];
    // let reviews = Object.values(state.entities.reviews)
    let user = state.entities.users

    return {
        product,
        user,
        // reviews: product && reviews.length > 0 ? product.reviewIds.map((reviewId) => state.entities.review[reviewId]) : [],
        // currentUser: state.session.currentUser ? state.entities.users[state.session.currentUser.id] : {},
        
    }
}

const mdp = dispatch => {
    return {
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      getOneProduct: (product) => dispatch(getOneProduct(product)),
      createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    //   deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    };
}

export default connect(msp, mdp)(ProductShow)