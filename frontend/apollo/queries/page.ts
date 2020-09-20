import gql from "graphql-tag";

const PAGE_QUERY = gql`
  query Pages($id: ID!) {
    page(id: $id) {
      id
      title
      content
    }
  }
`;

export default PAGE_QUERY;
