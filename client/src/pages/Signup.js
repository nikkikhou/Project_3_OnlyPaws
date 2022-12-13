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
        <section class="hero is-primary is-fullheight">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-centered">
                <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                  <form action="" class="box">
                    <div class="field">
                      <label for="" class="label">Username</label>
                      <div class="control has-icons-left">
                        <input type="text" placeholder="Enter a Username" class="input" required />
                        <span class="icon is-small is-left">
                          <i class="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div class="field select">
                      <label>Breed</label>
                      <select>
                        <option>Select a breed</option>
                        <option>Snoopy</option>
                        <option>Clifford</option>
                      </select>
                    </div>
                    <div class="field">
                      <label for="" class="label">Password</label>
                      <div class="control has-icons-left">
                        <input type="password" placeholder="Enter a Password" class="input" required />
                        <span class="icon is-small is-left">
                          <i class="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div class="field">
                      <button class="button is-success">
                        Create Profile
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
