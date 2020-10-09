import gql from "graphql-tag";

const MARQUEE_QUERY = gql`
  query Marquee {
    marquee {
      bundle {
        id
        markdown
      }
    }
  }
`;

export default MARQUEE_QUERY;
