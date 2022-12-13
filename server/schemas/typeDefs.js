const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
