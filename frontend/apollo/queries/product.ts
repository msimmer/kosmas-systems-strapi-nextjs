import gql from "graphql-tag";

const PRODUCT_QUERY = gql`
  query Products($slug: String) {
    products(where: { slug: $slug }) {
      id
      title
      slug
      price
      currency
      quantity
      image {
        id
        url
        alternativeText
      }
      gallery {
        id
        url
        alternativeText
      }
    }
  }
`;

export default PRODUCT_QUERY;
