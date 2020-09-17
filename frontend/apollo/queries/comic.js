import gql from "graphql-tag";

const COMIC_QUERY = gql`
  query Comics($slug: String!) {
    comics(where: { slug: $slug }) {
      id
      title
      slug
      gallery {
        url
        alternativeText
      }
    }
  }
`;

export default COMIC_QUERY;
