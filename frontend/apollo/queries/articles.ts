import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      image {
        url
        alternativeText
      }
      media {
        url
        alternativeText
      }
      source_name
      source_url
      published_at
    }
  }
`;

export default ARTICLES_QUERY;
