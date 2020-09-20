import React from "react";
import Query from "@components/Query";
import Grid from "@components/Grid";
import Image from "@components/Image";
import ARTICLES_QUERY from "@queries/articles";
import { IImage, IArticles } from "k-component";

const ArticleImage = ({ image }: { image: IImage }) => {
  if (!image) return null;

  return (
    <div className="k-article-image">
      <Image src={image.url} alt={image.alternativeText} />
    </div>
  );
};

const Articles = () => (
  <Grid columns={2}>
    <Query query={ARTICLES_QUERY}>
      {({ articles }: { articles: IArticles }) => (
        <>
          {articles.map((article) => {
            const sourceURL = article.source_url || "#";

            return (
              <div key={article.id} className="k-article">
                <ArticleImage image={article.image} />
                <a
                  className="k-article-link"
                  href={sourceURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="k-article-details">
                    <span className="k-article-title">{article.title}</span>
                    <br />

                    <span className="k-article-source">
                      {article.source_name}
                    </span>
                    <br />

                    <span className="k-article-published">
                      {article.published_at}
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </>
      )}
    </Query>
  </Grid>
);

export default Articles;
