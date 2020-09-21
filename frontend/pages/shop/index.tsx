import React from "react";
import Link from "next/link";
import Grid from "@components/Grid";
import Image from "@components/Image";
import Price from "@components/Price";
import { IProduct, IProducts } from "k-component";
import { GetStaticProps } from "next";
import { initializeApollo } from "@lib/apollo";
import PRODUCTS_QUERY from "@queries/products";
import { REVALIDATION_TIMEOUT } from "@lib/constants";

const PurchaseDetails = ({ product }: { product: IProduct }) => {
  if (product.quantity < 1) return <div>SOLD OUT</div>;

  return (
    <div>
      <Price
        currency={product.currency}
        amount={product.price}
        className="k-padding-small-right k-text-red"
      />
      <Link href={`/shop/${product.slug}`}>
        <a className="k-text-red">BUY</a>
      </Link>
    </div>
  );
};

const Products = ({ products }: { products: IProducts }) => (
  <Grid columns={2} collapse={true}>
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="k-column-image">
            <Image
              className="k-image-cover k-image-filter"
              src={product.image.url}
              alt={product.image.alternativeText}
            />
            <Link href={`/shop/${product.slug}`}>
              <a>
                <Image
                  className="k-image-contain k-image-padding k-image-hover"
                  src={product.image.url}
                  alt={product.image.alternativeText}
                />
              </a>
            </Link>

            <div className="k-product-details">
              <div className="k-text-red">{product.title}</div>

              <PurchaseDetails product={product} />
            </div>
          </div>
        );
      })}
    </>
  </Grid>
);

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: PRODUCTS_QUERY });
  const { products } = data;

  return {
    props: { products },
    revalidate: REVALIDATION_TIMEOUT,
  };
};

export default Products;
