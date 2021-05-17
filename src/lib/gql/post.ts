import { gql } from '@apollo/client';

export const GET_POST = gql`
  query getPost($slug: String!) {
    postCollection(where: { slug: $slug }) {
      total
      skip
      limit
      items {
        sys {
          id
          spaceId
          environmentId
          publishedAt
          firstPublishedAt
          publishedVersion
        }
        contentfulMetadata {
          tags {
            id
            name
          }
        }
        title
        slug
        thumbnail {
          title
          description
          contentType
          size
          url
          width
          height
          sys {
            id
            spaceId
            environmentId
            publishedAt
            firstPublishedAt
            publishedVersion
          }
        }
        content {
          json
        }
      }
    }
  }
`;
