import React from "react";
import Items from "./Items";
import PRODUCTS_QUERY from "../../apollo/queries/products";

const Shop = () => (
  <Items
    title="Shop"
    prop="products"
    pathname="product"
    query={PRODUCTS_QUERY}
  />
);

export default Shop;
