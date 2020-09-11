import React from "react";
import Items from "./Items";
import ARTICLES_QUERY from "../../apollo/queries/articles";

const Press = () => (
  <Items
    title="Press"
    prop="articles"
    pathname="article"
    query={ARTICLES_QUERY}
  />
);

export default Press;
