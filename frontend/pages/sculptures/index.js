import React from "react";
import Query from "../../components/Query";
import Grid from "../../components/Grid";
import SCULPTURES_QUERY from "../../apollo/queries/sculptures";

const Sculptures = () => (
  <Grid columns={2}>
    <Query query={SCULPTURES_QUERY}>
      {({ sculptures }) =>
        sculptures.map((sculpture) => (
          <div key={sculpture.id}>{sculpture.title}</div>
        ))
      }
    </Query>
  </Grid>
);

export default Sculptures;
