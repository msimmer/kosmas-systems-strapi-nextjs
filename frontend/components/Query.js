import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: {
      id,
      slug,
    },
  });

  if (loading) return <p>Loading ...</p>;
  if (error)
    return (
      <pre style={{ fontSize: "1.8rem" }}>
        Error: {JSON.stringify(error, " ", 2)}
      </pre>
    );
  return children(data);
};

export default Query;
