import React from "react";
import Grid from "@components/Grid";
import Query from "@components/Query";
import Image from "@components/Image";
import WORKS_QUERY from "@queries/works";
import { IWorks } from "k-component";

const Swirl = () => (
  <Grid columns={2}>
    <Query query={WORKS_QUERY}>
      {({ works }: { works: IWorks }) => (
        <>
          {works.map((work) => (
            <div key={work.id}>
              {work.gallery.map((item) => (
                <Image key={item.id} src={item.url} alt="" />
              ))}
            </div>
          ))}
        </>
      )}
    </Query>
  </Grid>
);

export default Swirl;
