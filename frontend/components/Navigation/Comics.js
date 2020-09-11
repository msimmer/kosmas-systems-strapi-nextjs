import React from "react";
import Items from "./Items";
import COMICS_QUERY from "../../apollo/queries/comics";

const Press = () => (
  <Items title="Comix" prop="comics" pathname="comic" query={COMICS_QUERY} />
);

export default Press;
