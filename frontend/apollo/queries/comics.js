import gql from "graphql-tag";

const COMICS_QUERY = gql`
  query Comics {
    comics {
      id
      title
    }
  }
`;

export default COMICS_QUERY;
