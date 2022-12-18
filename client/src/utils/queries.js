import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query User($username: String!) {
  user(username: $username) {
    _id
    email
    profile {
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
    username
  }
}
`;

// export const QUERY_COURSE = gql`
//   query course($courseId: ID!) {
//   course(courseId: $courseId) {
//     _id
//     courseName
//     startDate
//     endDate
//     description
//     instructor
//     students {
//       _id
//       firstName
//       lastName
//       course
//       grades {
//         _id
//         assignmentName
//         grade
//       }
//     }
//     studentCount
//   }
// }
// `;

// export const QUERY_POSTS = gql`
//   query getPosts {
//     posts {
//       _id
//       postText
//       postAuthor
//       createdAt
//     }
//   }
// `;

export const QUERY_PROFILES = gql`
query Profiles($username: String) {
  profiles(username: $username) {
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
export const QUERY_SINGLE_PROFILE = gql`
query Profiles($profileId: ID!) {
  profile(profileId: $profileId) {
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




export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
    }
  }
`;
