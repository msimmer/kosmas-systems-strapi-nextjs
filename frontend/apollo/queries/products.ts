import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
  query Products {
    products(sort: "order:DESC") {
      id
      title
      slug
      price
      currency
      quantity
      color
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
