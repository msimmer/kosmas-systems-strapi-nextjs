import React from "react";
import DropdownListItem from "./DropdownListItem";
import ListItem from "./ListItem";

const Navigation = () => (
  <nav className="k-nav">
    <ul>
      <li style={{ visibility: "hidden", height: 0 }}>
        <h1>Kosmas Systems</h1>
      </li>

      <ListItem title="Shop" />
      <ListItem title="Sculpture" />
      <DropdownListItem title="Comix" />
      <ListItem title="About" />
      <ListItem title="Press" />
      <ListItem title="Swirl" />
    </ul>
  </nav>
);

export default Navigation;
