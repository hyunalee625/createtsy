import { connect } from 'react-redux';
import { getOneProduct } from '../../actions/product_actions';
import ProductShow from './product_show';
import { createCartItem } from '../../actions/shopping_cart_item_actions';
import {fetchReviews} from '../../actions/review_actions';
import { fetchCartItems } from '../../util/shopping_cart_item_api_util';



const msp = (state, ownProps ) => {
    let productId = ownProps.match.params.productId;
    let product = state.entities.products[productId];
    // let buyerId = state.entities.users[state.session.id].id;

    return {
        product,
        // buyerId
    }
}

const mdp = dispatch => {
    return {
      getOneProduct: (id) => dispatch(getOneProduct(id)),
      createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    //   fetchReviews: (productId) => dispatch(fetchReviews(productId))
    };
}

export default connect(msp, mdp)(ProductShow)