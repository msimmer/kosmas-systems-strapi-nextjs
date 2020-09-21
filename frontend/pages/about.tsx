import React from "react";
import Page from "@components/Page";
import PAGE_QUERY from "@queries/page";
import { IPage } from "k-component";
import { initializeApollo } from "@lib/apollo";
import { REVALIDATION_TIMEOUT } from "@lib/constants";

const About = ({ page }: { page: IPage }) => (
  <Page title={page.title} content={page.content} />
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: PAGE_QUERY,
    variables: { id: 1 },
  });
  const { page } = data;

  return {
    props: { page },
    revalidate: REVALIDATION_TIMEOUT,
  };
}

export default About;
