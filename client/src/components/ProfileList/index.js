import React from 'react';
import { Link } from 'react-router-dom';


const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="has-text-centered is-size-4 m-3">{title}</h3>
      <div className="is-flex is-flex-direction-row is-flex-wrap-wrap	is-justify-content-space-around is-align-items-center">
        {profiles &&
          profiles.map((profile) => (

            <div key={profile._id} class="card">
              <div class="card-image">
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                    {profile.img}
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{profile.name}</p>
                    <p class="subtitle is-6">@{profile.name}</p>
                  </div>
                </div>
                <div class="content has-text-centered">
                  "{profile.aboutMe}"
                  <br></br>
                    <Link className="button" to={`/profile/${profile._id}`}>
                      Go to profile
                    </Link>    
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
