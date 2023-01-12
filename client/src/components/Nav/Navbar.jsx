import React from 'react';
import { Link } from "react-router-dom";



function Navbar({ currentPage, handlePageChange }) {
  
  const [isActive, setisActive] = React.useState(false);
  
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="mt-3" to='/'>
        <p className="navbar-item">
          <img src="https://images.cooltext.com/5634882.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="150" height="130"></img>
        </p>
        </Link>
        <a onClick={() => { setisActive(!isActive); }} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="signup-links">
                <Link className="has-text-centered" to='/signup' style={{ textDecoration: 'none' }}>
                  <p className='button m-1 is-info is-outlined sign-up'>Sign Up</p>
                </Link>
                <Link className="has-text-centered" to='/login' style={{ textDecoration: 'none' }}>
                  <p className='button m-1 is-info is-outlined login'>Login</p>
                </Link>
                
              </div>
            </div>
        </div>
      </div>
    </nav>
)};

export default Navbar;