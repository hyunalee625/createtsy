import { connect } from 'react-redux';
import { getAllProducts } from '../../actions/product_action';
import ProductIndex from './product_index';

const msp = state => {
    return {
        products: Object.values(state.entities.products)
    }
}

const mdp = dispatch => {
    return {
        getAllProducts: () => dispatch(getAllProducts())
    }
}

export default connect(msp, mdp)(ProductIndex);