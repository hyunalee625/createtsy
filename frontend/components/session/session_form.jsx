import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions'

class SessionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {email: "", first_name: "", password: ""};
        // this.state = { email: "", password: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.actionForm(user).then(this,props.closeModal)
            .then(() => {this.props.history.push("/")})
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
        return (this.props.formType === "Sign in" ? 
        (
            <div className="signin-form-container">
                <form className="signin-form-box" onSubmit={this.handleSubmit}>
                <div className="signing-form-top-level">
                    <h3 className="signin-form-header">Sign in</h3>
                        <div className="signin-demo-buttons">
                            {/* <button type="button" onClick={this.props.signup} className="register-button">Register</button> */}
                            <Link to="/signup" className="signup-button">Register</Link>
                            {/* {this.props.navLink} */}
                        <button type="button" className="demo-button">Demo</button>
                        </div>
                </div>

                    <div className="form-errors-container">{this.renderErrors()}</div>
                    <div className="form-input">
                        <label className="login-input-title">Email address
                            <input className="login-form"
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>   
                        <br />
                        <label className='login-input-title'>Password
                            <input className="login-form"
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>

                        <div className="forgot-password-button">
                        <a href="/forgot_password?">Forgot your password?</a>
                        </div>

                        <input className="session-submit-container"
                            type="submit"
                            value={this.props.formType}
                        /> 
                    </div>

                        <div className="trouble-signing-in-button">
                            <a href="/trouble-signing-in?">Trouble signing in?</a>
                        </div>
                </form>
            </div>

        ) : (
            <div className="register-form-container">
                <form className="register-form-box" onSubmit={this.handleSubmit}>
                    <h3 className="register-form-header">Create you account</h3>
                    <p>Registration is easy.</p>
                    <button type="button" className="demo-button">Demo</button>

                    <div className="form-errors-container">{this.renderErrors()}</div>
                    <div className="form-input">
                        <label className="login-input-title">Email address
                            <input className="login-form"
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br />
                        <label className='login-input-title'>First name
                            <input className="login-form"
                                type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                            />
                        </label>
                        <br />
                        <label className='login-input-title'>Password
                        <input className="login-form"
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br />

                        <button className="session-submit-container"
                            type="submit"
                        >{this.props.formType}</button>
                            {/* <Link to="/login">Register</Link> */}
                    </div>

                </form>
            </div>
        ))
    }
}

export default SessionForm;