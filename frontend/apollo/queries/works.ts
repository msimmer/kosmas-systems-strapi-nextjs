import gql from "graphql-tag";

const WORKS_QUERY = gql`
  query Works {
    works {
      id
      title
      gallery {
        id
        url
        mime
      }
    }
  }
`;

export default WORKS_QUERY;
