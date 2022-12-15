const db = require('../config/connection');
const { User, Profile, } = require('../models');
const userSeeds = require('./userSeeds.json');
const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
  try {
    // await Post.deleteMany({});
    await User.deleteMany({});
    await Profile.deleteMany({});

    await User.create(userSeeds);
    // await Profile.create(profileSeeds);
    // await Post.create(postSeeds);


    // for (let i = 0; i < userSeeds.length; i++) {
    //   const { _id, username } = await Profile.create(profileSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { name: username },
    //     {
    //       $addToSet: {
    //         profile: _id,
    //       },
    //     },

    //   );
    // }


// links profile to user
    for (let i = 0; i < profileSeeds.length; i++) {
      const { _id, originalUser } = await Profile.create(profileSeeds[i]);
      // const { _id, postAuthor } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: originalUser },
        {
          $addToSet: {
            profile: _id,
          },
        }
      );
    }

// links post to profiles
    // for (let i = 0; i < postSeeds.length; i++) {
    //   const { _id, postAuthor } = await Post.create(postSeeds[i]);
    //   const user = await Profile.findOneAndUpdate(
    //     { name: postAuthor },
    //     {
    //       $addToSet: {
    //         posts: _id,
    //       },
    //     }
    //   );
    // }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
