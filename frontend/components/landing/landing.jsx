import React from 'react';
import ProductIndexContainer from '../products/product_index_container'

class Landing extends React.Component {

    constructor(props) {
        super(props)

        this.loggedIn = this.loggedIn.bind(this);
        this.loggedOut = this.loggedOut.bind(this);
    }

    loggedIn() {
      let { currentUser } = this.props;
      return (
        <div className="product-listing">
          <div>
            <h3 className="welcome-back">
              Welcome back, {currentUser.first_name}!
            </h3>
          </div>
        </div>
      );
    }

    loggedOut() {
      return (
        <div className="landing-page-container">
          <div className="landing-page-sub">
            <h2 className="landing-page-header">
              Find things you'll love. Support independent sellers. Only on
              creatEtsy.
            </h2>
              <h3 className="landing-page-sub-header">Everyday finds</h3>
          </div>
          {/* <div className="landing-page-pic-container">
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
          </div> */}

          <div className="mid-banner-container">
            <div className="mid-banner">
              <div className="mid-banner-headers">
                <h3 className="mid-banner-header">                        
                  Unique everything</h3>
              </div>
              <p className="mid-banner-p">
                We have millions of one-of-a-kind items, so you can find
                whatever you need (or really, really want).
              </p>
            </div>
            <div className="mid-banner">
              <div className="mid-banner-headers">
                <h3 className="mid-banner-header">Independent sellers</h3>
              </div>
              <p className="mid-banner-p">
                Buy directly from someone who put their heart and soul into
                making something special.
              </p>
            </div>
            <div className="mid-banner">
              <div className="mid-banner-headers">
                <h3 className="mid-banner-header">Secure shopping</h3>
              </div>
              <p className="mid-banner-p">
                We use best-in-class technology to protect your transactions.{" "}
              </p>
            </div>
          </div>
        </div>
      );

    }

    render() {
        let { currentUser } = this.props;
        return currentUser ? this.loggedIn() : this.loggedOut();
    }
}

export default Landing;