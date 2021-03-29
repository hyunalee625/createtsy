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

    demoLogin(e) {
        e.preventDefault();
      // debugger
        const demoUser = {
            id: 95,
            email: "lauren@gmail.com",
            password: "abcde"
        }

        this.props.demoAction(demoUser).then(this.props.closeModal);
    }

    componentWillUnmount() {
      debugger
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
        // let error = 
        return this.props.formType === "Sign in" ? (
          <div className="signin-form-container">
            <form className="signin-form-box" onSubmit={this.handleSubmit}>
              <div className="signin-input-form-container">
                <div className="signin-form-top-level">
                  <h3 className="signin-form-header">Sign in</h3>
                  <div className="register-demo-buttons">
                    <div className="modal-register-button">
                      {this.props.otherForm}
                    </div>
                    <button
                      type="button"
                      onClick={this.demoLogin}
                      className="demo-button"
                    >
                      Demo
                    </button>
                  </div>
                </div>
                <div className="form-input">
                  {/* <div class="form-input-box"> */}
                  <div className="email-input-form">
                    <label>
                      <div className="input-title">Email address</div>
                      <input
                        className="info-input-form"
                        type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                      />
                    </label>
                    <div className="form-errors-container">
                      {this.renderErrors()}
                    </div>
                  </div>
                  <br />
                  <div className="password-input-form">
                    <label>
                      <div className="input-title">Password</div>
                      <input
                        className="info-input-form"
                        type="password"
                        value={this.state.password}
                        aria-invalid="true"
                        onChange={this.update("password")}
                      />
                    </label>
                    <div className="form-errors-container">
                      {this.renderErrors()}
                    </div>
                  </div>
 
                </div>
                <button className="session-submit-container" type="submit">
                  Sign in
                </button>

              </div>
            </form>
          </div>
        ) : (
          <div className="register-form-container">
            <form className="register-form-box" onSubmit={this.handleSubmit}>
              <div className="register-input-form-container">
                <div className="register-form-top-level">
                  <h3 className="register-form-header">Create you account</h3>

                  <div className="signin-demo-button">
                    {this.props.otherForm}
                    <button
                      type="button"
                      onClick={this.demoLogin}
                      className="demo-button"
                    >
                      Demo
                    </button>
                  </div>
                </div>
                <h5 className="sub-header">Registration is easy.</h5>

                <div className="form-input">
                  <div className="form-input-box">
                    <div className="email-input-form">
                      <label>
                        <div className="input-title">
                          Email address
                          {/* <span className="asterisk">*</span> */}
                        </div>
                        <input
                          className="info-input-form"
                          type="text"
                          value={this.state.email}
                          onChange={this.update("email")}
                        />
                      </label>
                      <div className="form-errors-container">
                        {this.renderErrors()}
                      </div>
                    </div>
                    <br />
                    <div className="firstname-input-form">
                      <label>
                        <div className="input-title">
                          First name
                          {/* <span className="asterisk">*</span> */}
                        </div>
                        <input
                          className="info-input-form"
                          type="text"
                          value={this.state.first_name}
                          onChange={this.update("first_name")}
                        />
                      </label>
                      <div className="form-errors-container">
                        {this.renderErrors()}
                      </div>
                    </div>
                    <br />
                    <div className="password-input-form">
                      <label>
                        <div className="input-title">
                          Password
                          {/* <span className="asterisk">*</span> */}
                        </div>
                        <input
                          className="info-input-form"
                          type="password"
                          value={this.state.password}
                          onChange={this.update("password")}
                        />
                      </label>
                      <div className="form-errors-container">
                        {this.renderErrors()}
                      </div>
                    </div>
                    <br />
                  </div>
                  <button type="submit" className="session-submit-btn">
                    {this.props.formType}
                  </button>
                  <div className="form-errors-container"></div>
                </div>
                {/* <Link to="/login">Register</Link> */}
              </div>
            </form>
          </div>
        );
    }
}

export default SessionForm;