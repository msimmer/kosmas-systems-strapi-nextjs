import React from "react";
import ReactMarkdown from "react-markdown";

interface PageProps {
  title: string;
  content: string;
}

const Page = ({ title, content }: PageProps) => (
  <div className="uk-container k-margin-mega-top">
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
