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

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
  }

  type Query {
    user(userId: ID!): User
    post(postId: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(posttText: String!): Post
    removePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;
