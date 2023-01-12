import React from 'react';

const PostList = ({ posts = [{}] }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }
  return (
    <>
      <h3
        className="has-text-centered is-size-5"
        style={{ borderBottom: '1px solid #1a1a1a' }}
      >
        Posts
      </h3>
      <div className="flex-row my-4">
      {posts &&
          posts.map((posts) => (
            <div key={posts._id} className="">
              <div className="card m-3 p-3 has-text-centered">
                <p className="card-body">{posts.postText}</p>
                <p className="">
                  {posts.postAuthor} posted on {posts.createdAt}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default PostList;
