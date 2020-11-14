import React from "react";
import Link from "next/link";

interface ListItemProps {
  href?: string;
  title: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface LinkWithHandlerProps {
  onLinkClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: string;
}

const LinkWithHandler = ({ onLinkClick, ...props }: LinkWithHandlerProps) => {
  const handleClick = (e: any) => {
    if (props.onClick) {
      props.onClick(e);
    }

    if (onLinkClick) {
      onLinkClick(e);
    }
  };

  return <a {...props} onClick={handleClick} />;
};

const ListItem = ({ href, title, handleClick }: ListItemProps) => {
  const path = href ?? `/${title.toLowerCase()}`;
  return (
    <li>
      <Link href={path}>
        <LinkWithHandler onLinkClick={handleClick}>{title}</LinkWithHandler>
      </Link>
    </li>
  );
};

export default ListItem;
