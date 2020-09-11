import React from "react";
import Articles from "../components/Articles";
import Query from "../components/Query";
import ARTICLES_QUERY from "../apollo/queries/articles";

const Home = () => (
  <div>home</div>
  // <div>
  //   <div className="uk-section">
  //     <div className="uk-container uk-container-large">
  //       <h1>Strapi blog</h1>
  //       <Query query={ARTICLES_QUERY}>
  //         {({ articles }) => {
  //           return <Articles articles={articles} />;
  //         }}
  //       </Query>
  //     </div>
  //   </div>
  // </div>
);

export default Home;
