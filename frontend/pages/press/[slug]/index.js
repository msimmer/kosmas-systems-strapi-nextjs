import React from "react";
import { useRouter } from "next/router";
import Query from "../../../components/Query";
import ARTICLE_QUERY from "../../../apollo/queries/article";

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  return (
    <Query query={ARTICLE_QUERY} slug={slug}>
      {({ articles }) =>
        articles.map((article) => (
          <div key={article.id}>
            <h1>{article.title}</h1>
          </div>
        ))
      }
    </Query>
  );
};

export default Article;
