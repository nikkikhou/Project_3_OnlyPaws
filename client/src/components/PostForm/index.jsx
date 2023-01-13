import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';

// import Auth from '../../utils/auth';

const PostForm = ({ profileId }) => {
  const [postText, setPostText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addPosts, { error }] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPosts({
        variables: {
          profileId,
          postText,
          // postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className=''>
      <h4 className='has-text-centered m-4 is-size-5'>Create a post</h4>
      <form className="has-text-centered" onSubmit={handleFormSubmit}>
        <div className="col-12 col-lg-9">
          <textarea
            name="postText"
            placeholder="Add your post..."
            value={postText}
            className="textarea is-small is-info"
            onChange={handleChange}
          >
          </textarea>
          <p className={`m-0 has-text-centered is-size-7 ${characterCount === 280 || error ? 'text-danger' : ''}`}>
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
        </div>
        <div className="">
          <button className="button is-info is-outlined m-3" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
