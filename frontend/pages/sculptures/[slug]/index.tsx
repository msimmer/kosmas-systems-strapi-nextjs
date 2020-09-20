import React from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Grid from "@components/Grid";
import Query from "@components/Query";
import Image from "@components/Image";
import SCULPTURE_QUERY from "@queries/sculpture";
import { ISculptures } from "k-component";

const Sculpture = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Grid columns={1}>
      <Query query={SCULPTURE_QUERY} slug={slug}>
        {({ sculptures }: { sculptures: ISculptures }) => {
          const [sculpture] = sculptures;

          return (
            <div>
              <h2 className="k-margin-mega-top uk-margin-medium-bottom">
                {sculpture.title}
              </h2>

              <div className="uk-margin-large-bottom uk-width-3-5 k-text-body">
                <ReactMarkdown source={sculpture.content} />
              </div>

              {sculpture.gallery.map((image) => (
                <div
                  key={image.url}
                  className="k-sculpture-detail uk-margin-medium-bottom"
                >
                  <Image src={image.url} alt={image.alternativeText} />
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    </Grid>
  );
};

export default Sculpture;
