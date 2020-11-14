import React from "react";
import DropdownListItem from "./DropdownListItem";
import ListItem from "./ListItem";

interface NavigationProps {
  handleClick?: () => void;
}

const Navigation = ({ handleClick }: NavigationProps) => {
  return (
    <nav className="k-nav">
      <ul>
        <li style={{ visibility: "hidden", height: 0 }}>
          <h1>Kosmas Systems</h1>
        </li>

        <ListItem handleClick={handleClick} title="Shop" />
        <ListItem handleClick={handleClick} title="Sculpture" />
        <DropdownListItem handleClick={handleClick} title="Comix" />
        <ListItem handleClick={handleClick} title="About" />
        <ListItem handleClick={handleClick} title="Press" />
        <ListItem handleClick={handleClick} title="Swirl" />
      </ul>
    </nav>
  );
};

export default Navigation;
