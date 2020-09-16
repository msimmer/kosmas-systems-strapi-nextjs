import React, { useState } from "react";
import Query from "./Query";
import ListItem from "./ListItem";
import COMICS_QUERY from "../apollo/queries/comics";

const DropdownListItem = ({ title }) => {
  const [open, setOpen] = useState(false);
  const className = open ? "open" : "closed";

  const toggle = () => setOpen(!open);

  return (
    <Query query={COMICS_QUERY}>
      {({ comics }) => {
        if (!comics.length) return null;

        return (
          <li>
            <button onClick={toggle}>{title}</button>

            <ul className={`k-dropdown-${className}`}>
              {comics.map((comic) => (
                <ListItem href={`/comix/${comic.slug}`} title={comic.title} />
              ))}
            </ul>
          </li>
        );
      }}
    </Query>
  );
};

export default DropdownListItem;
