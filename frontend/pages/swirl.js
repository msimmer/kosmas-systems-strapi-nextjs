import React from "react";
// import ReactMarkdown from "react-markdown";
import Grid from "../components/Grid";
import Query from "../components/Query";
import WORKS_QUERY from "../apollo/queries/works";

const Swirl = () => (
  <Grid columns={2}>
    <Query query={WORKS_QUERY} id={null}>
      {({ works }) =>
        works.map((work) => (
          <div key={work.id}>
            {work.gallery.map((item) => (
              <Image key={item.id} src={item.url} alt="" />
            ))}
          </div>
        ))
      }
    </Query>
  </Grid>
);

export default Swirl;
