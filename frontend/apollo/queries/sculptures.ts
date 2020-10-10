import gql from "graphql-tag";

const SCULPTURES_QUERY = gql`
  query Sculptures {
    sculptures(sort: "order:DESC") {
      id
      title
      slug
      image {
        url
        alternativeText
      }
    }
  }
`;

export default SCULPTURES_QUERY;
