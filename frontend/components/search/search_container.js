import { connect } from "react-redux";
import { searchProducts } from "../../actions/product_actions";
import Search from "./search";

const mdp = (dispatch) => ({
  searchProducts: (query) => dispatch(searchProducts(query)),
});

export default connect(null, mdp)(Search);
