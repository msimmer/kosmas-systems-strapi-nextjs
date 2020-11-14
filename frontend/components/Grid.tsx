import React from "react";

interface GridProps {
  columns: number;
  children?: React.ReactChild;
  collapse?: boolean;
}

const Grid = ({ columns, children, collapse }: GridProps) => (
  <div
    className={`uk-grid uk-grid-medium ${
      collapse ? "uk-grid-collapse" : ""
    } uk-child-width-1-${columns}@m`}
  >
    {children}
  </div>
);

export default Grid;
