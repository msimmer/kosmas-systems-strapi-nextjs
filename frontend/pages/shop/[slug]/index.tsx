import React from "react";
import ReactMarkdown from "react-markdown";
import Carousel from "@components/Carousel";
import Price from "@components/Price";
import { IImage, IImages, IProduct } from "k-component";
import { GetStaticPaths, GetStaticProps } from "next";
import { initializeApollo } from "@lib/apollo";
import PRODUCT_QUERY from "@queries/product";
import PRODUCTS_QUERY from "@queries/products";
import { REVALIDATION_TIMEOUT } from "@lib/constants";

type IProductDetailsProps = Pick<IProduct, "title" | "content">;

type IProductActionsProps = Pick<IProduct, "price" | "currency" | "quantity">;

interface IProductImagesProps {
  image: IImage;
  gallery: IImages;
}

const ProductImages = ({ image, gallery }: IProductImagesProps) => {
  const images = [image].concat(gallery);
  return (
    <div className="uk-width-3-5@s uk-padding-medium-right">
      <Carousel images={images} />
    </div>
  );
};

const ProductDetails = (props: IProductDetailsProps) => (
  <>
    <h2 className="k-product-title uk-margin-small-bottom">{props.title}</h2>

    {props.content && (
      <div className="uk-margin-medium-bottom">
        <ReactMarkdown source={props.content} />
      </div>
    )}
  </>
);

const ProductActions = (props: IProductActionsProps) => {
  if (!props.price || !props.currency || !props.quantity)
    return (
      <div className="uk-margin-medium-left">
        <strong>
          <em>SOLD OUT</em>
        </strong>
      </div>
    );

  return (
    <>
      <div className="uk-flex uk-align-items-flex-end uk-margin-small-bottom">
        <div className="uk-margin-small-right">
          <Price amount={props.price} currency={props.currency} />
        </div>
        <div>
          <label htmlFor="quantity" className="uk-flex uk-flex-column">
            <span className="k-text-small">Qty:</span>
            <input type="number" min="1" value="1" max={props.quantity} />
          </label>
        </div>
      </div>
      <div>
        <button className="k-button-actions-buy">BUY</button>
      </div>
    </>
  );
};

const Product = ({ product }: { product: IProduct }) => (
  <div className="uk-grid uk-grid-medium">
    <ProductImages image={product.image} gallery={product.gallery} />
    <div className="uk-width-2-5@s uk-margin-medium-top uk-margin-medium-bottom k-product-actions">
      <ProductDetails {...product} />
      <ProductActions {...product} />
    </div>
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: PRODUCTS_QUERY });
  const paths = data.products.map(({ slug }: IProduct) => ({
    params: { slug },
  }));

  return { paths, fallback: "unstable_blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: PRODUCT_QUERY,
    variables: { slug: params?.slug },
  });
  const [product] = data.products;

  return {
    props: { product },
    revalidate: REVALIDATION_TIMEOUT,
  };
};

export default Product;
