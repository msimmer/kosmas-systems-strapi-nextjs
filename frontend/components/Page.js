import React from "react";
import ReactMarkdown from "react-markdown";

const Page = ({ title, content }) => (
  <div className="uk-container uk-margin-medium-top">
    <div className="uk-grid uk-grid-medium">
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
