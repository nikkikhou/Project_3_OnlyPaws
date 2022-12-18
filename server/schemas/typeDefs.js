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
    _id: ID!
    name: String
    originalUser: String
    aboutMe: String
    img: String
    posts: [Posts]!
  }
  type Posts {
    _id: ID!
    postText: String
    postAuthor: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    #make sure they all have resolvers
    profiles(username: String): [Profile]
    profile(profileId: ID!): Profile
    me: User

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    #create resolver 
    addProfile(name: String, aboutMe: String, img: String, originalUser: String): Profile
    addPosts(profileId: ID!, postText: String!): Profile
    #create resolver 
    removeProfile(profileId: ID!): Profile
    removePosts(profileId: ID!, postId: ID!): Profile

  }
`;

module.exports = typeDefs;
