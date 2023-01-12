import React from 'react';
import AuthService from '../utils/auth';
import { useQuery } from '@apollo/client';
import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);

  const profiles = data?.profiles || [];

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={AuthService.logout}>Logout</button>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <div className="col-12 col-md-10 my-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ProfileList
                  profiles={profiles}
                  title="Here's all our furry friends!"
                />
              )}
          </div>
        </div>
      </div>
    </div>
  )
};


export default Dashboard;
