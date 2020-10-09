import React from "react";
import Grid from "@components/Grid";
import Image from "@components/Image";
import ARTICLES_QUERY from "@queries/articles";
import { IImage, IArticles } from "k-component";
import { initializeApollo } from "@lib/apollo";
import { REVALIDATION_TIMEOUT } from "@lib/constants";
import { GetStaticProps } from "next";

const ArticleImage = ({ image }: { image: IImage }) => {
  if (!image) return null;

  return (
    <div className="k-article-image">
      <Image src={image.url} alt={image.alternativeText} />
    </div>
  );
};

const Articles = ({ articles }: { articles: IArticles }) => (
  <Grid columns={2} collapse={true}>
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

                <span className="k-article-source">{article.source_name}</span>
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
  </Grid>
);

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: ARTICLES_QUERY });
  const { articles } = data;

  return {
    props: { articles },
    revalidate: REVALIDATION_TIMEOUT,
  };
};

export default Articles;
