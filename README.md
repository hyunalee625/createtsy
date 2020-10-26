<!-- <h1>creatEtsy</h1> -->
![creatEtsy](https://i.imgur.com/WVxMrxL.png)

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

![Modal]([img]https://i.imgur.com/eo20L4E.mp4[/img])
<!-- (https://i.imgur.com/netiN4P.png) -->

<!-- ```javascript
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
``` -->

![ShoppingCart](https://i.imgur.com/yIcPmzj.png)

```javascript
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
            <img id="search-btn" src={window.search}></img>
            {/* <i class="fas fa-search"></i> */}
          </button>
        </div>
      </form>
    );
  }
}
```

---
<h2>Future implementations</h2>
<li>Categories: Products are sorted by categories</li>
<li>Favorites: Users can add the items they like to 'favorites'</li>