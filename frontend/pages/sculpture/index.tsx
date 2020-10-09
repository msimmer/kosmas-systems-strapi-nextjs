import React from "react";
import Link from "next/link";
import Grid from "@components/Grid";
import Image from "@components/Image";
import SCULPTURES_QUERY from "@queries/sculptures";
import { ISculptures } from "k-component";
import { initializeApollo } from "@lib/apollo";
import { GetServerSideProps } from "next";

const Sculptures = ({ sculptures }: { sculptures: ISculptures }) => (
  <Grid columns={2} collapse={true}>
    <>
      {sculptures.map((sculpture) => (
        <div className="k-sculpture" key={sculpture.id}>
          <div className="k-sculpture-image">
            <Image
              src={sculpture.image.url}
              alt={sculpture.image.alternativeText}
            />
          </div>
          <div className="k-sculpture-title k-padding-small-right k-text-red">
            <Link href={`/sculpture/${sculpture.slug}`}>
              <a>{sculpture.title}</a>
            </Link>
          </div>
        </div>
      ))}
    </>
  </Grid>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: SCULPTURES_QUERY });
  const { sculptures } = data;

  return { props: { sculptures } };
};

export default Sculptures;
