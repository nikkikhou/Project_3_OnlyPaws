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
    aboutMe: String
    img: String
    post: [Post]
  }
  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
  }

  type Query {
    user(userId: ID!): User

    profile(userId: ID!): Profile
    posts(username: String): [Post]
    post(postId: ID!): Post

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
    addPost(postText: String!): Post
    removePost(postId: ID!): Post

  }
`;

module.exports = typeDefs;
