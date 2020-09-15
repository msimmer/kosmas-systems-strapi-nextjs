import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
  query Products {
    products {
      id
      title
      slug
      price
      currency
      quantity
      image {
        url
        alternativeText
      }
      gallery {
        url
        alternativeText
      }
    }
  }
`;

export default PRODUCTS_QUERY;
