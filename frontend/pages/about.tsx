import React from "react";
import Query from "@components/Query";
import Page from "@components/Page";
import PAGE_QUERY from "@queries/page";
import { IPage } from "k-component";

const About = () => (
  <Query query={PAGE_QUERY} id={1}>
    {({ page }: { page: IPage }) => (
      <Page title={page.title} content={page.content} />
    )}
  </Query>
);

export default About;
