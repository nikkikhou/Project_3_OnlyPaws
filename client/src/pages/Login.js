import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  /// HANDLE CHANGE ///
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /// FORM SUBMISSION ///
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token, data.login.user._id);
    } catch (error) {
      console.log(error);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main>
      {data ? (
        <p>Successfully logged in! You may now head{' '}<Link to='/'>back to the hompage.</Link></p>
      ) : (


<section className="hero is-dark is-fullheight">
  <div className="hero-body">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-2-tablet ">
          <form onSubmit={handleFormSubmit} className="box login-form">
            <div className="field">
              <label for="" className="label">Email</label>
              <div className="control has-icons-left">
              <input
              placeholder='Email'
              name='email'
              type='email'
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
              <div className="control has-icons-left">
              <input
              placeholde='Password'
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
            <div className="field">
              <button className="button is-info">
                Login
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
        <div>{error.message}</div>
      )}
    </main>
  );
};

export default Login;