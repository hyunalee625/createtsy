import React from 'react';
import ProductIndexContainer from '../products/product_index_container'

class Landing extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        // let = { currentUser } = this.props;

        // const loggedIn = () => (
        //   <div className="product-listing">
        //     <ul>
        //       <ProductIndexContainer />
        //     </ul>
        //   </div>
        // );

        // const loggedOut = () => (
          return (
            <div className="landing-page-container">
              <h2 className="landing-page-header">
                Find things you'll love. Support independent sellers. Only on
                creatEtsy.
              </h2>
              <div className="landing-page-pic-container">
                <div className="dream-catcher">
                  <img src="https://i.etsystatic.com/11168186/r/il/f367fa/1539064120/il_1588xN.1539064120_igr9.jpg" />
                </div>
                <div className="right-side-pics">
                  <div className="hanging-planter">
                    <img src="https://assets.weimgs.com/weimgs/ab/images/wcm/products/202018/0006/convivial-woven-hanging-planter-o.jpg" />
                  </div>
                  <div className="vintage-kitchen">
                    <img src="https://www.mydomaine.com/thmb/Xe-XPRP1CbqBsUwFaJaoSPkMtU0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ErinWilliamsonDesign-3f1e22099f5c455b92075eaa18289e1f.jpeg" />
                  </div>
                </div>
              </div>
            </div>
          );

        // return currentUser ? loggedIn() : loggedOut();
    }

    // render() {
    //     let { currentUser } = this.props;
    //     const loggedIn = () => {
    //         return (
    //             <div>
    //                 <ProductIndexContainer />
    //             </div>
    //         )
    //     };

    //     const loggedOut = () => (
    //         <
    //     )
    // }
}

export default Landing;