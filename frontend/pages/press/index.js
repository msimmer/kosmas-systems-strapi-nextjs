import React from "react";
import Query from "../../components/Query";
import Grid from "../../components/Grid";
import ARTICLES_QUERY from "../../apollo/queries/articles";
import Link from "next/link";

const Articles = () => (
  <Grid columns={2}>
    <Query query={ARTICLES_QUERY}>
      {({ articles }) =>
        articles.map((article) => (
          <div key={article.id}>
            <Link href={`/press/${article.slug}`}>
              <a>{article.title}</a>
            </Link>
          </div>
        ))
      }
    </Query>
  </Grid>
);

export default Articles;
