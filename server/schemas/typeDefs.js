const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    profile: [Profile]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Profile {
    name: String
    originalUser: String
    aboutMe: String
    img: String
    post: [Post]
  }
  type Posts {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    profile(username: String): [Profile]
    profile(postId: ID!): Profile
    me: User

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProfile(aboutMe: String): Profile
    addPosts(profileId: ID!, postText: String): Profile
    removeProfile(profileId: ID!): Profile
    removePosts(profileId: ID!, postId: ID!): Profile

  }
`;

module.exports = typeDefs;
