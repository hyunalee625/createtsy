import React from "react";

class ProductIndex extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
          <div className="trending-now">
            Trending Now!
            <form>
              <input type="hidden" value="{process.envREACT_APP_CREATETSY}" />
              {window.PRODUCT_API_KEY}
            </form>
          </div>
        );
    }
}

export default ProductIndex;