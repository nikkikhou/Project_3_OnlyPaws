const { AuthenticationError } = require("apollo-server-express");
const { User, Profile } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("profiles");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("profiles");
    },
    profiles: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Profile.find(params).sort({ createdAt: -1 });    
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("profiles");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    /// ADD USER ///
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    /// LOGIN ///
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    // create a profile
    addProfile: async (parent, { name, aboutMe, img, originalUser }, context) => {
      if (context.user) {
        const profile = await Profile.create({ name, aboutMe, img, originalUser});

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { profile: profile._id } }
        );
        return profile

      };
    },
 // create a post by taking in post text and the profile id set post author to user name
  addPosts: async (parent, { profileId, postText }, context) => {
    if (context.user) {
      // console.log(' in here', profileId)
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: {
          posts: { postText, postAuthor: context.user.username },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      ); 
    }
    throw new AuthenticationError('You need to be logged in!');
  },
    // Delete a profile
    removeProfile: async (parent, { profileId }, context) => {
      if (context.user) {
        const profile = await Profile.findOneAndDelete({
          _id: profileId,
          name: context.user.username,
          originalUser: context.user.username,
          aboutMe,
          img,
          posts,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { profiles: profile._id } }
        );

        return profile;
      }
    },
    // remove a post, takes in profile is and post id finds pulls - displays id and author
    removePosts: async (parent, { profileId, postId }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $pull: {
              posts: {
                _id: postId,
                postAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
