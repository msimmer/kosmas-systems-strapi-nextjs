import React from "react";

const Image = ({ src, alt, className }) => {
  const classname = className || "";
  const url =
    process.env.NODE_ENV !== "development"
      ? src
      : `${process.env.API_URL}${src}`;

  return <img className={classname} src={url} alt={alt} />;
};

export default Image;
