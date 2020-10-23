import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Grid from "@components/Grid";
import Image from "@components/Image";
import { IComic } from "k-component";
import { initializeApollo } from "@lib/apollo";
import { REVALIDATION_TIMEOUT } from "@lib/constants";
import COMIC_QUERY from "@queries/comic";
import COMICS_QUERY from "@queries/comics";

const Comic = ({ comic }: { comic: IComic }) => (
  <Grid columns={1}>
    <div className="k-comic-image-wrapper">
      {comic.gallery.map((image) => (
        <Image key={image.url} src={image.url} alt={image.alternativeText} />
      ))}
    </div>
  </Grid>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: COMICS_QUERY });
  const paths = data.comics.map(({ slug }: IComic) => ({ params: { slug } }));

  return { paths, fallback: "unstable_blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: COMIC_QUERY,
    variables: { slug: params?.slug },
  });
  const [comic] = data.comics;

  return {
    props: { comic },
    revalidate: REVALIDATION_TIMEOUT,
  };
};

export default Comic;
