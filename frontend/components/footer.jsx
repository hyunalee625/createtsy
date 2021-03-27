import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                    <Link to='/'>
                        <h1 className="footer-logo">creatEtsy</h1>
                    </Link>

                        {/* <a href="https://www.linkedin.com/in/lauren-hyuna-lee/"><img id="footer-social" src={window.linkedin}></img></a>
                        <a href="https://github.com/hyunalee625"><img id="footer-social" src={window.github}></img></a>
                        <a href="http://laurenhlee.com/"><img id="footer-social" src={window.portfolio}></img></a> */}
                        <div className="footer-socials">
                            <a href="https://www.linkedin.com/in/lauren-hyuna-lee/" className="footer-social" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/hyunalee625" className="footer-social" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="http://laurenhlee.com/" className="footer-social" target="_blank" rel="noopener noreferrer"><i className="fas fa-user"></i></a>  
                        </div>
                <div className="footer-end">&copy; 2020 Createsy, Inc.</div>
            </div>
        )
    }
}

export default withRouter(Footer);