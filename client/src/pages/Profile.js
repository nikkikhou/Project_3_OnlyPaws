import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '../App.css'


const Profile = () => {
    return (
      <body className='profile-page'>

        <div className='bio-container'>
          <div className='profile-photo-container'></div>
          <div className='small-bio-container'></div>
        </div>

        <div className='Lbio-container'>
          <div className='Lbio'></div>
        </div>

      </body>
    )
  };
  
  export default Profile;
  