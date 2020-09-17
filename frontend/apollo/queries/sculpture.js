import gql from "graphql-tag";

const SCULPTURE_QUERY = gql`
  query Sculptures($slug: String!) {
    sculptures(where: { slug: $slug }) {
      id
      title
      slug
      content
      gallery {
        url
        alternativeText
      }
    }
  }
`;

export default SCULPTURE_QUERY;
