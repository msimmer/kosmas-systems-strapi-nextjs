import React from "react";
import Link from "next/link";
import Query from "@components/Query";
import Grid from "@components/Grid";
import Image from "@components/Image";
import SCULPTURES_QUERY from "@queries/sculptures";
import { ISculptures } from "k-component";

const Sculptures = () => (
  <Grid columns={2} collapse={true}>
    <Query query={SCULPTURES_QUERY}>
      {({ sculptures }: { sculptures: ISculptures }) => (
        <>
          {sculptures.map((sculpture) => (
            <div className="k-sculpture" key={sculpture.id}>
              <div className="k-sculpture-image">
                <Image
                  src={sculpture.image.url}
                  alt={sculpture.image.alternativeText}
                />
              </div>
              <div className="k-sculpture-title k-text-shadow">
                <Link href={`/sculptures/${sculpture.slug}`}>
                  <a>{sculpture.title}</a>
                </Link>
              </div>
            </div>
          ))}
        </>
      )}
    </Query>
  </Grid>
);

export default Sculptures;
