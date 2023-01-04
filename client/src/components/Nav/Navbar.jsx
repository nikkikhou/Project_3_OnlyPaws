import React from 'react';
import { Link } from "react-router-dom";


function Navbar({ currentPage, handlePageChange }) {

    return (
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <p class="navbar-item">
      <img src="https://images.cooltext.com/5634882.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="150" height="130"></img>
    </p>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-end">
    <div class="navbar-item">
      <div class="signup-links">
        <Link class="has-text-centered" to='/signup' style={{ textDecoration: 'none' }}>
          <p className='sign-up'>Sign Up</p>
        </Link>
        <Link class="has-text-centered" to='/login' style={{ textDecoration: 'none' }}>
          <p className='login'>Login</p>
        </Link>
      </div>
    </div>
  </div>
</nav>
    )

};

export default Navbar;