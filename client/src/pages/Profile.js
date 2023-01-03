import React from 'react';
// import ProfileList from '../components/ProfileList';
// import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { profileId } = useParams();

  console.log(useParams)

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    // pass URL parameter
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {profile.name} 
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {profile.aboutMe}
        </blockquote>
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <PostForm profileId={profile._id} />
      </div>
      <div className="my-5">
        {/* <PostList comments={profile.posts} /> */}
      </div>
    </div>
  );
};

export default SingleThought;
