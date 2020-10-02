import { connect } from "react-redux";
import { searchProducts } from "../../actions/search_actions";
import { getOneProduct } from "../../actions/product_actions";
import Search from "./search";

const msp = (state) => ({
  products: Object.values(state.entities.products),
});

const mdp = (dispatch) => ({
  searchProducts: (query_string) => dispatch(searchProducts(query_string)),
  getOneProduct: (productId) => dispatch(getOneProduct(productId)),
});

export default connect(msp, mdp)(Search);
