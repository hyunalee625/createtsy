import { connect } from 'react-redux';
import { getAllProducts, getOneProduct } from '../../actions/product_actions';
import ProductIndex from './product_index';

const msp = ( state ) => {
    // debugger
    return {
        products: Object.values(state.entities.products)
    }
}

const mdp = dispatch => {
    return {
        getAllProducts: () => dispatch(getAllProducts()),
        getOneProduct: id => dispatch(getOneProduct(id))
    }
}

export default connect(msp, mdp)(ProductIndex);