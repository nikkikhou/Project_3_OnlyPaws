const { AuthenticationError } = require("apollo-server-express");
const { User, Profile } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("profile");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("profile");
    },
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate("posts");
      // const params = _id ? { _id } : {};
      // return Profile.find(params).sort({ createdAt: -1 });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("profiles");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // posts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Post.find(params).sort({ createdAt: -1 });
    // },
    // post: async (parent, { postId }) => {
    //   return Post.findOne({ _id: postId });
    // },

    /// GETS ONE USER ///
    // user: async (parent, { userId }, context) => {
    //   if (context.user) {
    //     const userData = await (await User.findOne({ _id: userId }).select('-__v -password'));

    //     return userData;
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },
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
    addProfile: async (parent, { aboutMe }, context) => {
      // console.log("here")
      if (context.user) {
        const profile = await Profile.create({
          name: context.user.username,
          originalUser: context.user.username,
          aboutMe,
          img,
          posts,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { profiles: profile._id } }
        );

        return profile;
      }

      // if (context.user) {
      //   return Profile.findOneAndUpdate(
      //     { _id: profileId },
      //     {
      //       $addToSet: {
      //         posts: { postText, postAuthor: context.user.username },
      //       },
      //     },
      //     {
      //       new: true,
      //       runValidators: true,
      //     }
      //   );
      // }
      throw new AuthenticationError("You need to be logged in!");
    },
    // create a profile
    removeProfile: async (parent, { profileId }, context) => {
      // console.log("here")
      if (context.user) {
        const profile = await Profile.create({
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
    // create a post by taking in post text and the profile id set post author to user name
    addPosts: async (parent, { profileId, postText, postAuthor }, context) => {
      console.log("here");
      if (context.user) {
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
      throw new AuthenticationError("You need to be logged in!");
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
