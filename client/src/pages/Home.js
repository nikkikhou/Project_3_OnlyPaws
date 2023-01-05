import React from 'react';
import { Link } from 'react-router-dom';
import Walking from '../components/Walking.json';
import Lottie from 'lottie-react';


const Home = () => {
  return (
    // 
    <div id='home-page'>
      <div id='walking'>
      <Lottie id="walking-dog" animationData={Walking} />
      </div>
      <div id="home-container" class="tile is-ancestor">
        <div class="tile is-3 is-vertical is-parent">
          <div class="banner tile is-child box">
            <p class="title">One</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </div>
      </div>
      {/* <section class="hero is-info is-fullheight">
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
                  <Link class="is-size-3 has-text-centered" to='/login' style={{ textDecoration: 'none' }}>
                    <h2>Login</h2>
                  </Link>
                  </span>
                  <span class="navbar-item">
                  <Link class="is-size-3 has-text-centered" to='/signup' style={{ textDecoration: 'none' }}>
                    <h2>Sign Up</h2>
                  </Link>
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
                This is the a social media platform to all of our four legged friends out there! For those of you new to the litter.... Welcome!
              </h2>
            </div>
          </div>
        </div>
      </section> */}
      </div>
  )
};

export default Home;
