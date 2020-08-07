import React from "react";
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // debugger
    this.props.getAllProducts()
  }


  render() {
    const { products } = this.props;
    // debugger
    return (
      <div className="all-products">
        <div className="trending-items">
          <h2 className="trending-items-header">Trending items</h2>
            <ul className="product-listing">
            {products.map(product => <li key={product.id}><ProductIndexItem key={product.id} product={product} /></li>)}
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