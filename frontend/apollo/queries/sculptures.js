import gql from "graphql-tag";

const SCULPTURES_QUERY = gql`
  query Sculptures {
    sculptures {
      id
      title
    }
  }
`;

export default SCULPTURES_QUERY;
