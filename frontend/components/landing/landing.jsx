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
              Add some delight to your daily routine.
            </h2>
              <h3 className="landing-page-sub-header">Shop everyday items.</h3>
              <div className="landing-pics-container">
                <div className="landing-pics-subcontainer">
                  <div className="landing1-container">
                    <img id="landing1"src={window.landing1}></img>
                    <small>Romantic ambiance</small>
                  </div>
                  <div className="landing2-container">
                    <img id="landing2"src={window.landing2}></img>
                    <small>Necklaces</small>
                  </div>
                  <div className="landing3-container">
                    <img id="landing3"src={window.landing3}></img>
                    <small>Personalized cards</small>
                  </div>
                  <div className="landing4-container">
                    <img id="landing4"src={window.landing4}></img>
                    <small>Coasters</small>
                  </div>
                  <div className="landing5-container">
                    <img id="landing5"src={window.landing5}></img>
                    <small>Valentine’s wreaths</small>
                  </div>
                  <div className="landing6-container">
                    <img id="landing6"src={window.landing6}></img>
                    <small>Engagement rings</small>
                  </div>
                  </div>
              </div>
          </div>


          <div className="mid-banner-container">
            <div className="mid-banner">
              <div className="mid-banner-headers">
                <h3 className="mid-banner-header"><img id="mid-banner-icon" src={window.unique}></img>                        
                  A one-of-a-kind community</h3>
              </div>
              <p className="mid-banner-p">
                creatEtsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.
              </p>
            </div>
            <div className="mid-banner">
              <div className="mid-banner-headers">
                <h3 className="mid-banner-header"><img id="mid-banner-icon" src={window.lightbulb}></img>Support independent creators</h3>
              </div>
              <p className="mid-banner-p">
                There’s no creatEtsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
              </p>
            </div>
            <div className="mid-banner">
              <div className="mid-banner-headers">
                <h3 className="mid-banner-header"><img id="mid-banner-icon" src={window.heart}></img>Peace of mind</h3>
              </div>
              <p className="mid-banner-p">
                Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
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