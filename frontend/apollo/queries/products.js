import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
  query Products {
    products {
      id
      title
    }
  }
`;

export default PRODUCTS_QUERY;
