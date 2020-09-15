import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      slug
      title
    }
  }
`;

export default ARTICLES_QUERY;
