import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

import { QUERY_PROFILES } from '../utils/queries';

const Landing = () => {
    const { loading, data } = useQuery(QUERY_PROFILES);
  const posts = data?.posts || [];
  return (
    // 
    <body>
      <section class="hero is-info is-fullheight">
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

        <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <PostForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>

      </section>
      <script async type="text/javascript" src="../js/bulma.js"></script>
    </body>
  )
};

export default Landing;
