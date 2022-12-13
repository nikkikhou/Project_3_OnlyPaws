import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <body>
      <section class="hero is-primary is-fullheight">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <span class="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                  <span class="navbar-item">
                    <a class="button is-white is-outlined" href="/login">
                      <span class="icon">
                        <i class="fa fa-home"></i>
                      </span>
                      <span>Login</span>
                    </a>
                  </span>
                  <span class="navbar-item">
                    <a class="button is-white is-outlined" href="/Signup">
                      <span class="icon">
                        <i class="fa fa-superpowers"></i>
                      </span>
                      <span>Signup</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
              <h1 class="title">
                Welcome to OnlyPaws!!!
              </h1>
              <h2 class="subtitle">
                This is a social media platform to all of our four legged friends out there! For those of you new to the litter, we are happy to have you here!
              </h2>
            </div>
          </div>
        </div>

      </section>
      <script async type="text/javascript" src="../js/bulma.js"></script>
    </body>
  )
};

export default Landing;
