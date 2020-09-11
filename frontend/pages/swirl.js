import React from "react";
import ReactMarkdown from "react-markdown";
import Query from "../components/Query";
import WORKS_QUERY from "../apollo/queries/works";

const Swirl = () => (
  <Query query={WORKS_QUERY} id={null}>
    {({ works }) => (
      <div className="uk-container">
        <div>
          {works.map((work) => (
            <div
              key={work.id}
              className="uk-grid uk-grid-medium uk-child-width-1-2"
            >
              {work.gallery.map((item) => (
                <img
                  key={item.id}
                  className="uk-margin-medium-bottom"
                  src={`${process.env.API_URL}${item.url}`}
                  alt=""
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    )}
  </Query>
);

export default Swirl;

// {
//   <div>
// <ReactMarkdown source={page.content} />
// </div>
// }
