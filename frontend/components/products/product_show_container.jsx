import { connect } from 'react-redux';
import { getOneProduct } from '../../actions/product_actions';
import ProductShow from './product_show';


const msp = (state, ownProps ) => {
    let productId = ownProps.match.params.productId;
    let product = state.entities.products[productId];

    return {
        product
    }
}

const mdp = dispatch => {
    return {
      getOneProduct: (id) => dispatch(getOneProduct(id))
    };
}

export default connect(msp, mdp)(ProductShow)