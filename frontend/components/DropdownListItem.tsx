import React, { useState } from "react";
import Query from "./Query";
import ListItem from "./ListItem";
import COMICS_QUERY from "@queries/comics";
import { IComics } from "k-component";

interface DropdownListItemProps {
  title: string;
  handleClick?: () => void;
}

const DropdownListItem = ({ title, handleClick }: DropdownListItemProps) => {
  const [open, setOpen] = useState(false);
  const className = open ? "open" : "closed";

  const toggle = () => setOpen(!open);

  return (
    <li>
      <button onClick={toggle}>{title}</button>

      <ul className={`k-dropdown-${className}`}>
        <Query query={COMICS_QUERY}>
          {({ comics }: { comics: IComics }) => {
            if (!comics.length) return <></>;

            return (
              <>
                {comics.map((comic) => (
                  <ListItem
                    key={comic.id}
                    href={`/comix/${comic.slug}`}
                    title={comic.title}
                    handleClick={handleClick}
                  />
                ))}
              </>
            );
          }}
        </Query>
      </ul>
    </li>
  );
};

export default DropdownListItem;
