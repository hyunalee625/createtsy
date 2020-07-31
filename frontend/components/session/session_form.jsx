import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal, closeModal } from '../../actions/modal_actions'

class SessionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {email: "", first_name: "", password: ""};
        // this.state = { email: "", password: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.toggleToSignup = this.toggleToSignup.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const user = Object.assign({}, this.state);
        // debugger
        this.props.actionForm(user).then(this.props.closeModal)
            // .then(() => {this.props.history.push("/")})
    }

    // toggleToSignup(){
    //     this.props.otherForm
    // }

    demoLogin(e) {
        e.preventDefault();

        const demoUser = {
            email: "lauren@gmail.com",
            password: "abcde"
        }

        this.props.demoAction(demoUser).then(this.props.closeModal);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        //debugger
        return(
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return this.props.formType === "Sign in" ? (
          <div className="signin-form-container">
            <form className="signin-form-box" onSubmit={this.handleSubmit}>
              <div className="signin-input-form-container">
                <div className="signin-form-top-level">
                  <h3 className="signin-form-header">Sign in</h3>
                  <div className="top-register-button">
                    {this.props.otherForm}
                  </div>
                </div>
                <div className="form-input">
                  {/* <div class="form-input-box"> */}
                  <label>
                    <div className="input-title">Email address</div>
                    <input
                      className="info-input-form"
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                    />
                  </label>
                  <br />
                  <label>
                    <div className="input-title">Password</div>
                    <input
                      className="info-input-form"
                      type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                    />
                  </label>
                  {/* </div> */}

                  <div className="forgot-password-button">
                    <a href="/forgot_password?">Forgot your password?</a>
                  </div>
                </div>
                <button className="session-submit-container" type="submit">
                  Sign in
                </button>

                <div className="trouble-signing-in-button">
                  <a href="/trouble-signing-in?">Trouble signing in?</a>
                </div>
              </div>
              <div className="form-errors-container">{this.renderErrors()}</div>
            </form>

            <button type="button" onClick={this.demoLogin} className="demo-button">Demo</button>
          </div>
        ) : (
          <div className="register-form-container">
            <form className="register-form-box" onSubmit={this.handleSubmit}>
              <div className="register-input-form-container">
                <div className="register-form-top-level">
                  <h3 className="register-form-header">Create you account</h3>

                  <div className="top-signin-button">
                    {this.props.otherForm}
                  </div>
                </div>
                <h5 className="sub-header">Registration is easy.</h5>

                <div className="form-input">
                  <div className="form-input-box">
                    <label>
                      <div className="input-title">Email address</div>
                      <input
                        className="info-input-form"
                        type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                      />
                    </label>
                    <br />
                    <label>
                      <div className="input-title">First name</div>
                      <input
                        className="info-input-form"
                        type="text"
                        value={this.state.first_name}
                        onChange={this.update("first_name")}
                      />
                    </label>
                    <br />
                    <label>
                      <div className="input-title">Password</div>
                      <input
                        className="info-input-form"
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                      />
                    </label>
                    <br />
                  </div>
                  <button type="submit" className="session-submit-btn">
                    {this.props.formType}
                  </button>
                  <div className="form-errors-container">
                    {this.renderErrors()}
                  </div>
                </div>
                {/* <Link to="/login">Register</Link> */}
              </div>
            </form>
            <button type="button" onClick={this.demoLogin} className="register-demo-button">Demo</button>
          </div>
        );
    }
}

export default SessionForm;