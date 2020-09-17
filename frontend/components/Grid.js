import React from "react";

const Grid = ({ columns, children, collapse }) => (
  <div
    className={`uk-grid uk-grid-medium ${
      collapse ? "uk-grid-collapse" : ""
    } uk-child-width-1-${columns}@s`}
  >
    {children}
  </div>
);

export default Grid;
