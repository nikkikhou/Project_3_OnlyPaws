import React from 'react';
import AuthService from '../utils/auth';
// import { useQuery } from '@apollo/client';

import CreateProfileForm from '../components/CreateProfileForm';
// import PostForm from '../components/PostForm';

// import { QUERY_PROFILES } from '../utils/queries';

const CreateAProfile = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const posts = data?.posts || [];

  return (
    <div>
      <h1>Create A Profile</h1>
      <button onClick={AuthService.logout}>Logout</button>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <CreateProfileForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Barks go here..."
            />
          )} */}
        </div>
      </div>
    </div>
  )
};

export default CreateAProfile;
