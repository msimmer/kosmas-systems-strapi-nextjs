import React from "react";
import Query from "../components/Query";
import Page from "../components/Page";
import PAGE_QUERY from "../apollo/queries/page";

const About = () => (
  <Query query={PAGE_QUERY} id={1}>
    {({ page }) => <Page title={page.title} content={page.content} />}
  </Query>
);

export default About;
