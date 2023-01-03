import React from 'react';
import { Link } from 'react-router-dom';


const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4>
                  {profile.name}
                </h4>
                <p >"{profile.aboutMe}"</p>
                <p>{profile.img}</p>
                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profile/${profile._id}`}
                >
                  View my profile here.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
