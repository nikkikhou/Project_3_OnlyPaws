import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  /// UPDATES STATE BASED ON INPUT ///
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /// HANDLE SUBMISSION OF FORM ///
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token, data.addUser.user._id);
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <main>
      {data ? (
        <p variant='subtitle1'>Successfully created an account. You may now head{' '}<Link to='/'>back to the hompage.</Link></p>
      ) : (


<section className="hero is-dark is-fullheight">
  <div className="hero-body">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-2-tablet ">
          <form onSubmit={handleFormSubmit} className="box signup-form">
            <div className="field">
              <label for="" class="label">Username</label>
              <div className="control has-icons-left">
              <input
              placeholder='Username'
              name='username'
              type='text'
              value={formState.username}
              onChange={handleChange}
            />              </div>
            </div>
            <div className="field">
              <label for="" className="label">Email</label>
              <div className="control has-icons-left">
              <input
              placeholder='Email'
              name='email'
              type='text'
              value={formState.email}
              onChange={handleChange}
            />           
            <span className="icon is-small is-left">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
              <input
              placeholder='Password'
              name='password'
              type='password'
              value={formState.password}
              onChange={handleChange}
            />            
             <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div  className="field">
              <button className="button is-info" type="submit">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
      )}
      {error && (
        <div>
          {error.message}
        </div>
      )}
    </main>
  );
};

export default Signup;