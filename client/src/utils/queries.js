import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
      }
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

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
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
