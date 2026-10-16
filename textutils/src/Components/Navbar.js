import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>   {/*we use backticks to use template literals and ${props.mode} to use the value of props.mode in the className and we use navbar-${props.mode} to change the color of the navbar based on the value of props.mode and we use bg-${props.mode} to change the background color of the navbar based on the value of props.mode */}       
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
            </ul>   
            {/*  
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>     {/*primary is used for blue colour i bootstrap and green is"succes" and red is "danger"*            
            </form>*/}

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>                        {/*we use backticks to use template literals and ${props.mode} to use the value of props.mode in the className and we use text-${props.mode} to change the color of the text based on the value of props.mode */}
                <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />                   {/*we use onClick={props.toggleMode} to call the toggleMode function when the checkbox is clicked */}
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          
        </div>
      </div>
    </nav>
  );
}

/*
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About here'
};*/
