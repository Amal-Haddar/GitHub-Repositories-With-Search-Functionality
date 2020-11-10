/* Github GraphQl Queries */

import gql from "graphql-tag";

//GraphQl Query to Get the viewer(current user)
export const GET_VIEWER = gql`
  query {
    viewer {
      avatarUrl
      login
      bio
    }
  }
`;

//GraphQl Query to fetch the viewer(current user) first 20 repositories
export const GET_REPOS = gql`
  query {
    viewer {
      repositories(first: 20, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          ... on Repository {
            id
            name
            url
            description
            homepageUrl
            createdAt
          }
        }
      }
    }
  }
`;

//GraphQl Search Query to search first 20 repositories by name
export const SEARCH_FOR_REPOS = gql`
  query($search_term: String!) {
    search(query: $search_term, type: REPOSITORY, first: 20) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            createdAt
            owner {
              login
            }
            stargazers {
              totalCount
            }
            description
            url
          }
        }
      }
    }
  }
`;
