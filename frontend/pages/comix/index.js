import React from "react";
import Query from "../../components/Query";
import Grid from "../../components/Grid";
import COMICS_QUERY from "../../apollo/queries/comics";

const Comics = () => (
  <Grid columns={2}>
    <Query query={COMICS_QUERY}>
      {({ comics }) =>
        comics.map((comic) => <div key={comic.id}>{comic.title}</div>)
      }
    </Query>
  </Grid>
);

export default Comics;
