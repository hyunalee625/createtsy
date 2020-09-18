import { connect } from 'react-redux';
import { getOneProduct } from '../../actions/product_actions';
import ProductShow from './product_show';
import { createCartItem } from '../../actions/shopping_cart_item_actions';


const msp = (state, ownProps ) => {
    let productId = ownProps.match.params.productId;
    let product = state.entities.products[productId];

    return {
        product
    }
}

const mdp = dispatch => {
    return {
      getOneProduct: (id) => dispatch(getOneProduct(id)),
      createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
    };
}

export default connect(msp, mdp)(ProductShow)