import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
      _id
    }
  }
}
`;

export const LOGIN_USER = gql`
 mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const ADD_PROFILE = gql`
mutation Mutation($aboutMe: String) {
  addProfile(aboutMe: $aboutMe) {
    _id
    aboutMe
    img
    name
    originalUser
    posts {
      _id
      createdAt
      postAuthor
      postText
    }
  }
}
`;



export const ADD_POST = gql`
mutation Mutation($profileId: ID!, $postText: String, $postAuthor: String) {
addPosts(profileId: $profileId, postText: $postText, postAuthor: $postAuthor) {
      _id
      postText
      postAuthor
      createdAt
  
    }
  }
`;