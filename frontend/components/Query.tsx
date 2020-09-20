import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import {
  IArticles,
  IComics,
  ISculptures,
  IPage,
  IWorks,
  IProducts,
} from "k-component";

interface ComicsData {
  comics: IComics;
}

interface ArticlesData {
  articles: IArticles;
}

interface SculptureData {
  sculptures: ISculptures;
}

interface PageData {
  page: IPage;
}

interface WorksData {
  works: IWorks;
}

interface ProductsData {
  products: IProducts;
}

type QueryData = ComicsData &
  ArticlesData &
  SculptureData &
  PageData &
  WorksData &
  ProductsData;

interface QueryProps {
  children: (data: QueryData) => JSX.Element;
  query: DocumentNode;
  id?: number;
  slug?: string | string[] | undefined;
}

const Query = ({ children, query, id, slug }: QueryProps) => {
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
        Error: {JSON.stringify(error, null, 2)}
      </pre>
    );

  // return children;
  return children(data);
};

export default Query;
