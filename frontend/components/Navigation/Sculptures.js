import React from "react";
import Items from "./Items";
import SCULPTURES_QUERY from "../../apollo/queries/sculptures";

const Sculptures = () => (
  <Items
    title="Sculptures"
    prop="sculptures"
    pathname="sculpture"
    query={SCULPTURES_QUERY}
  />
);

export default Sculptures;
