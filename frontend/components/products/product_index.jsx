import React from "react";
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const { products } = this.props;
    return (
      <div className="all-products">
        <div className="trending-items">
          <label>Trending items</label>
            <ul className="product-listing">
              {products.map(product => <ProductIndexItem key={product.id} product={product}/>)}
              {/* {window.EtsyAPIKey} */}
            </ul>
        </div>
      </div>
    );
  }

}


// class ProductIndex extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           error: null,
//           isLoaded: false,
//           products: []
//         };
//     }

//     componentDidMount() {
//       fetch(
//         "https://openapi.etsy.com/v2/listings/active?api_key=j7empvnlknpxz69tj8ikeo7k", {mode: "no-cors", header: {'Access-Control-Allow-Origin':'*'}}
//       ).then(response => response.json())
//       .then(
//         (result) => {
//         this.setState({
//           isLoaded: true,
//           products: result.results
//         });
//       },
//         (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//        }
//       )
//     }


//     render() {
//       const { error, isLoaded, products } = this.state;
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         return (
//           <ul>
//             {products.map((product) => (
//               <li key={product.title}>
//                 {product.title} {product.description} {product.price}
//               </li>
//             ))}
//           </ul>
//         );
//       }
//     }
// }

export default ProductIndex;