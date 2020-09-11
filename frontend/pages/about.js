import React from "react";
import ReactMarkdown from "react-markdown";
import Query from "../components/Query";
import PAGE_QUERY from "../apollo/queries/page";

const About = () => (
  <Query query={PAGE_QUERY} id={1}>
    {({ page }) => (
      <div className="uk-container">
        <div>
          <h2>{page.title}</h2>
        </div>
        <div>
          <ReactMarkdown source={page.content} />
        </div>
      </div>
    )}
  </Query>
);

export default About;
