const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    }, 
    users: async () => {
      return User.find().populate('posts');
    },
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    /// LOGIN ///
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    // create a post by taking in post text and the profile id set post author to user name
    addPosts: async (parent, { profileId, postText }, context) => {
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
      throw new AuthenticationError('You need to be logged in!');
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
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};



module.exports = resolvers;
