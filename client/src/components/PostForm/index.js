import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
// import { QUERY_POSTS } from '../../utils/queries';

import Auth from '../../utils/auth';

const PostForm = ({profileId}) => {

  const [postState, setPostState] = useState({
    postText: '',
    postAuthor: '',
});
  // const [postText, setPostText] = useState('');

  // const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST);


  const handleChange = (e) => {
    const { postText, value } = e.target;

    setPostState({
      ...postState,
      [postText]: value,
      });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
   
    try {
    const { data } = await addPost({
        variables: { ...postState },
    });
     window.location.href = `/`

    } catch (err) {
    console.error(err);
    }

};

  return (
    <div>
      <h3>What's on your mind?</h3>

      {Auth.loggedIn() ? (
        <>
          {/* <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p> */}
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="postText"
                placeholder="Here's a new thought..."
                value={postState.postText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Post
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
