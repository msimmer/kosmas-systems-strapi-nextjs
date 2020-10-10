import React from "react";
import Page from "@components/Page";
import PAGE_QUERY from "@queries/page";
import { IPage } from "k-component";
import { initializeApollo } from "@lib/apollo";
import { GetServerSideProps } from "next";

const About = ({ page }: { page: IPage }) => (
  <Page title={page.title} content={page.content} downloads={page.downloads} />
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
