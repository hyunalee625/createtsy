import { connect } from "react-redux";
import { searchProducts } from "../../actions/product_actions";
import Search from "./search";


const mdp = (dispatch) => {
  return {
    searchProducts: (search_query) => dispatch(searchProducts(search_query)),
  };
};

export default connect(null, mdp)(Search);
