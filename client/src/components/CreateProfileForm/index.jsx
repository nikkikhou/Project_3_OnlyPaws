import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PROFILE } from '../../utils/mutations';

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
    <div className='has-text-centered'>
      <h4>Create A Profile</h4>

          <form
            className="box"
            onSubmit={handleFormSubmit}
          >
            
            <input
              placeholder='Name'
              name='name'
              type='text'
              value={formState.name}
              onChange={handleChange}
              className='m-3'
            /> 
            <input
              placeholder='About Me'
              name='aboutMe'
              type='text'
              value={formState.aboutMe}
              onChange={handleChange}
              className='about-me-input m-3'

            /> 
            <input
              placeholder='Upload a Profile photo'
              name='img'
              type='text'
              value={formState.img}
              onChange={handleChange}
              className='m-3'

            />
            <input
              placeholder='My owner'
              name='originalUser'
              type='text'
              value={formState.originalUser}
              onChange={handleChange}
              className='m-3'

            />
              <button className="button m-3 is-info is-outlined" type="submit">
                Create Profile
              </button>
          
          </form>

    </div>
  );
};

export default CreateProfileForm;
