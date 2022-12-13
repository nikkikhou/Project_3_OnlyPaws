const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Profile {
    name: String
    aboutMe: String
    img: String
    # Add a queryable field to retrieve a single Professor object
    # post: [Post]!
  }

  type Query {
    user(userId: ID!): User
    profile(userId: ID!): Profile
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    # add img to profile
    addImg(profileName: String, img: String): Profile
    # add about me
    addAboutMe(name: String, aboutMe: String): Profile
    # add profile
    addProfile(name: String, aboutMe: String, img: String): Profile

  }
`;

module.exports = typeDefs;
