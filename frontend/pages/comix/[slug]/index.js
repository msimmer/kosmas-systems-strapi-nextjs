import React from "react";
import { useRouter } from "next/router";
import Grid from "../../../components/Grid";
import Query from "../../../components/Query";
import COMIC_QUERY from "../../../apollo/queries/comic";
import Image from "../../../components/Image";

const Comic = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Grid columns={1}>
      <Query query={COMIC_QUERY} slug={slug}>
        {({ comics }) => {
          const [comic] = comics;

          return comic.gallery.map((image) => (
            <Image
              key={image.url}
              src={image.url}
              alt={image.alternativeText}
            />
          ));
        }}
      </Query>
    </Grid>
  );
};

export default Comic;
