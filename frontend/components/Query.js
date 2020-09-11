import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <pre>Error: {JSON.stringify(error, " ", 2)}</pre>;
  return children(data);
};

export default Query;
