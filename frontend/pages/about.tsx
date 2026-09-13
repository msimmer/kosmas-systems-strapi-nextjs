import React from "react";
import Head from "next/head";
import Page from "@components/Page";
import PAGE_QUERY from "@queries/page";
import { IPage } from "k-component";
import { initializeApollo } from "@lib/apollo";
import { excerpt } from "@lib/text";
import { GetServerSideProps } from "next";

const About = ({ page }: { page: IPage }) => (
  <>
    <Head>
      <title>About — Kosmas Systems</title>
      <meta name="description" content={excerpt(page.content)} />
    </Head>

    <Page title={page.title} content={page.content} downloads={page.downloads} />
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: PAGE_QUERY,
    variables: { id: 1 },
  });
  const { page } = data;

  return { props: { page } };
};

export default About;
