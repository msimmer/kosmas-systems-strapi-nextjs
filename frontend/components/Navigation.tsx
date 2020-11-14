import React, { useState } from "react";
import UIKitCircles from "@components/UIKitCircles";
import UIKitClose from "@components/UIKitClose";
import DropdownListItem from "./DropdownListItem";
import ListItem from "./ListItem";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <button className="k-sidebar-toggle uk-hidden@m" onClick={handleClick}>
        <span className="uk-icon-button">
          {open ? <UIKitClose /> : <UIKitCircles />}
        </span>
      </button>
      <div
        className={`k-sidebar k-sidebar-${
          open ? "active" : "inactive"
        } uk-width-1-5@m`}
      >
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
      </div>
    </>
  );
};

export default Navigation;
