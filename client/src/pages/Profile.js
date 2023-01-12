import React from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const SingleProfile = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    // pass URL parameter
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3 has-background-warning is-flex is-flex-direction-column is-flex-wrap-wrap is-justify-content-center is-align-content-center ">
      <div className='card m-3 p-4 profile-card'>
        <h3 className="has-text-centered is-size-3 ">
          {profile.name} 
        </h3>
        <figure className="image is-48x48">
          {profile.img}
        </figure>
        <p className="p-4 has-text-centered">
          "{profile.aboutMe}"
        </p>
        <p className="p-4 has-text-centered">
          My owner is {profile.originalUser}
        </p>
      </div>
      <div className="">
      </div>
      <div className="card m-3 p-4">
        <PostForm profileId={profile._id} />
      </div>
      <div className="card m-3 p-4">
        <PostList posts={profile.posts} />
      </div>
    </div>
  );
};

export default SingleProfile;
