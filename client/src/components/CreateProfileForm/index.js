import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';



import { ADD_PROFILE } from '../../utils/mutations';
// import { QUERY_PROFILES, QUERY_ME } from '../../utils/queries';


// import Auth from '../../utils/auth';
// import { QUERY_PROFILES } from '../../utils/queries';

const CreateProfileForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        aboutMe: '',
        img: '',
        originalUser: '',
    });

   const [addProfile, { error }] = useMutation(ADD_PROFILE);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
        ...formState,
        [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
       
        try {
        const { data } = await addProfile({
            variables: { ...formState },
        });
         window.location.href = `/`

        } catch (err) {
        console.error(err);
        }

    };

  return (
    <div>
      <h4>Create A Profile</h4>

          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            
            <input
              placeholder='Name'
              name='name'
              type='text'
              value={formState.name}
              onChange={handleChange}
            /> 
            <input
              placeholder='About Me'
              name='aboutMe'
              type='text'
              value={formState.aboutMe}
              onChange={handleChange}
            /> 
            <input
              placeholder='Upload a Profile photo'
              name='img'
              type='text'
              value={formState.img}
              onChange={handleChange}
            />
            <input
              placeholder='My owner'
              name='originalUser'
              type='text'
              value={formState.originalUser}
              onChange={handleChange}
            />

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Create Profile
              </button>
            </div>
          </form>

    </div>
  );
};

export default CreateProfileForm;
