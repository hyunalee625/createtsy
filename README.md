<h1>creatEtsy</h1>

[creatEtsy](https://createtsy.herokuapp.com/#/) is an Etsy clone, an e-commerce platform where users can sell and purchase unique crafts created by other users on the platform.

---

<h2>Built with</h2>
<li>Javascript</li>
<li>React</li>
<li>Redux</li>
<li>Ruby on Rails</li>
<li>AWS</li>
<li>HMTL</li>
<li>CSS</li>
<li>PostgreSQL</li>

---
<h2>Features</h2>

![modal]https://i.imgur.com/sVAj8Rr.png

```javascript
    let component;
    switch(modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }
```

![products]https://i.imgur.com/netiN4P.png[/img]
```javascript
const ProductIndexItem = ({ product }) => {
    return (

      <div className="product-index-container">
        <div className="product-index-item">
            <img className="product-photo" src={product.photoUrl} alt="" />
            <div product-name-price>
            <div className="product-product-name">
          <Link className="product-name" to={product.product_name}>
            <div className="product-name">{product.product_name}</div>
          </Link>
            </div>
            <div className="product-price">${product.price}</div>
          </div>
        </div>
      </div>

    );
}
```

---
<h2>Future implementations</h2>
<li>products show: products will have its own page for users to click on and view</li>
<li>shopping cart: users can add, remove, update shopping cart</li>