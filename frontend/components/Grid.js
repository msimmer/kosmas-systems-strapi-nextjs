import React from "react";

const Grid = ({ columns, children }) => (
  <div className={`uk-grid uk-grid-medium uk-child-width-1-${columns}@s`}>
    {children}
  </div>
);

export default Grid;
