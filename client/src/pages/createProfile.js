import React from 'react';
// import AuthService from '../utils/auth';

import CreateProfileForm from '../components/CreateProfileForm';


const CreateAProfile = () => {

  return (

    <section className="hero is-info is-fullheight">
      <div className="hero-body is-justify-content-center">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <CreateProfileForm />
            </div>
          </div>
        </div>
      </div>
    </section>

        // <div className="" >
        //   <CreateProfileForm />
        // </div>
  )
};

export default CreateAProfile;
