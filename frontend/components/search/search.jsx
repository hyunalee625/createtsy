import React from "react";
import { withRouter } from "react-router-dom";
import productsReducer from "../../reducers/products_reducer";

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { search_query: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ search_query: "" });
    this.props.searchProducts(this.state.search_query).then(() => {
      this.props.history.push("/search");
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            onChange={this.update("search_query")}
            value={this.state.search_query}
            placeholder="Search for anything"
          />

          <button className="search-button" type="submit">
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(Search);
