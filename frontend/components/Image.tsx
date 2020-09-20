import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => {
  const classname = className || "";
  const url = `${process.env.API_URL}${src}`;

  return <img className={classname} src={url} alt={alt} />;
};

export default Image;
