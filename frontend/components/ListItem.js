import React from "react";
import Link from "next/link";

const ListItem = ({ href, title }) => {
  const path = href ?? `/${title.toLowerCase()}`;
  return (
    <li>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default ListItem;
