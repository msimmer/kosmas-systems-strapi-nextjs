import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import Grid from "@components/Grid";
import Image from "@components/Image";
import { ISculpture } from "k-component";
import { initializeApollo } from "@lib/apollo";
import SCULPTURE_QUERY from "@queries/sculpture";
import SCULPTURES_QUERY from "@queries/sculptures";
import { REVALIDATION_TIMEOUT } from "@lib/constants";
import { useRouter } from "next/dist/client/router";

const Sculpture = ({ sculpture }: { sculpture: ISculpture }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="k-margin-mega-top uk-margin-medium-bottom">
        <h1>Loading...</h1>;
      </div>
    );
  }

  // https://github.com/vercel/next.js/discussions/10960#discussioncomment-1201
  if (!sculpture) {
    return (
      <div className="k-margin-mega-top uk-margin-medium-bottom">
        <h1>404</h1>
      </div>
    );
  }

  return (
    <Grid columns={1}>
      <div>
        <div className="uk-margin-large-bottom uk-width-3-5@m k-text-body">
          <div>
            <h2 className="k-margin-mega-top uk-margin-medium-bottom">
              {sculpture.title}
            </h2>
            <ReactMarkdown source={sculpture.content} />
          </div>
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
    </Grid>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: SCULPTURES_QUERY });
  const paths = data.sculptures.map(({ slug }: ISculpture) => ({
    params: {
      slug,
      fallback: "unstable_blocking", // https://github.com/vercel/next.js/pull/15672
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: SCULPTURE_QUERY,
    variables: { slug: params?.slug },
  });

  const [sculpture] = data.sculptures;

  return {
    props: { sculpture },
    revalidate: REVALIDATION_TIMEOUT,
  };
};

export default Sculpture;
