import React from "react";
import Link from "next/link";

interface ListItemProps {
  href?: string;
  title: string;
}

const ListItem = ({ href, title }: ListItemProps) => {
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
