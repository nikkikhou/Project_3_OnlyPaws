import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main className='landing-page'>
      <div className="tile landing-tile-container is-ancestor has-text-centered ">
        <div className="tile landing-tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title">Only Paws</p>
            <Link to='/signup' style={{ textDecoration: 'none' }}>
              <h1 className='landing-h1'>Sign Up now</h1>
            </Link>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <h1 className='landing-h1'>Login now</h1>
            </Link> 
          </div>
        </div>
      </div>
    </main>
  )
};

export default Landing;