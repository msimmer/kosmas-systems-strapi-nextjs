import React from "react";
import ReactMarkdown from "react-markdown";

const Page = ({ title, content }) => (
  <div className="uk-container">
    <div>
      <h2>{title}</h2>
    </div>
    <div>
      <ReactMarkdown source={content} />
    </div>
  </div>
);

export default Page;
