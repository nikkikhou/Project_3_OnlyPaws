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
mutation Mutation($name: String, $aboutMe: String, $img: String, $originalUser: String) {
  addProfile(name: $name, aboutMe: $aboutMe, img: $img, originalUser: $originalUser) {
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
mutation Mutation($profileId: ID!, $postText: String!) {
  addPosts(profileId: $profileId, postText: $postText) {
    _id
    name
    originalUser
    aboutMe
    img
    posts {
      _id
      postText
      createdAt
    }
  }
}
`;