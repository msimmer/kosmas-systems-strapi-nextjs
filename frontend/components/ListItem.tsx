import React from "react";
import Link from "next/link";

interface ListItemProps {
  href?: string;
  title: string;
  handleClick?: () => void;
}

const ListItem = ({ href, title, handleClick }: ListItemProps) => {
  const path = href ?? `/${title.toLowerCase()}`;
  return (
    <li>
      <Link href={path}>
        <span onClick={handleClick}>
          <a>{title}</a>
        </span>
      </Link>
    </li>
  );
};

export default ListItem;
