import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>   {/*we use backticks to use template literals and ${props.mode} to use the value of props.mode in the className and we use navbar-${props.mode} to change the color of the navbar based on the value of props.mode and we use bg-${props.mode} to change the background color of the navbar based on the value of props.mode */}       
      <div className="container-fluid">

        {/* <a className="navbar-brand" href="#"> 
          {props.title}
        </a> */}
        <Link className="navbar-brand" to="/">          {/*link to is used to navigate to the home page when the brand name is clicked and we use Link instead of a tag because we are using react-router-dom and we use to="/" to navigate to the home page*/}
          {props.title}
        </Link>


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
              {/* <a className="nav-link active" href="#">
                 Home
              </a>   */}
              <Link className="nav-link active" to="/"> 
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about"> 
                  {props.aboutText}
                </Link>
              {/* <a className="nav-link active" href="/about">
                {props.aboutText}
              </a> */}
            </li>
            </ul>   
            {/*  
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>     {/*primary is used for blue colour i bootstrap and green is"succes" and red is "danger"*            
            </form>*/}
            <div className = 'd-flex'>
              <div className = 'bg-primary rounded mx-3'  onClick = { () => {props.toggleMode('primary')} } style = {{height: '30px', width: '30px', cursor: 'pointer'}}> </div>       {/*this is used for create custom color pallete */}
              <div className = 'bg-success rounded mx-3'  onClick = { () => {props.toggleMode('success')} } style = {{height: '30px', width: '30px', cursor: 'pointer'}}> </div>
              <div className = 'bg-danger rounded mx-3'  onClick = { () => {props.toggleMode('danger')} } style = {{height: '30px', width: '30px', cursor: 'pointer'}}> </div>
              <div className = 'bg-warning rounded mx-3'  onClick = { () => {props.toggleMode('warning')} } style = {{height: '30px', width: '30px', cursor: 'pointer'}}> </div>
              <div className = 'bg-light rounded mx-3'  onClick = { () => {props.toggleMode('light')} } style = {{height: '30px', width: '30px', cursor: 'pointer'}}> </div>
              <div className = 'bg-dark rounded mx-3'  onClick = { () => {props.toggleMode('dark')} } style = {{height: '30px', width: '30px', cursor: 'pointer'}}> </div>
            </div>

            {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>                        {/*we use backticks to use template literals and ${props.mode} to use the value of props.mode in the className and we use text-${props.mode} to change the color of the text based on the value of props.mode */}
                {/* <input className="form-check-input"  onClick={ () => {props.toggleMode(null)} } type="checkbox" id="flexSwitchCheckDefault" />                   we use onClick={props.toggleMode} to call the toggleMode function when the checkbox is clicked */}
                {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle DarkMode</label> */}
            {/* </div>  */}
          
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
