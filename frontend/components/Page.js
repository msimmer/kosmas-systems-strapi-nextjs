import React from "react";
import ReactMarkdown from "react-markdown";

const Page = ({ title, content }) => (
  <div className="uk-container k-page">
    <div className="uk-grid uk-grid-medium uk-margin-small-top">
      <div>
        <h2 className="uk-margin-medium-bottom">{title}</h2>
      </div>
      <div className="uk-grid uk-grid-medium">
        <div className="uk-width-3-5 k-text-body">
          <ReactMarkdown source={content} />
        </div>
      </div>
    </div>
  </div>
);

export default Page;
