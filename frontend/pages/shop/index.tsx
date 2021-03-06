import React from "react";
import Link from "next/link";
import Grid from "@components/Grid";
import Image from "@components/Image";
import Price from "@components/Price";
import { IProduct, IProducts } from "k-component";
import { GetServerSideProps } from "next";
import { initializeApollo } from "@lib/apollo";
import PRODUCTS_QUERY from "@queries/products";

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
          <div className="k-column-product" key={product.id}>
            <Link href={`/shop/${product.slug}`}>
              <a>
                <Image
                  className="k-image-contain k-image-padding k-image-hover"
                  src={product.image?.url}
                  alt={product.image?.alternativeText}
                />

                <div
                  className="k-column-color"
                  style={{ backgroundColor: product.color }}
                ></div>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: PRODUCTS_QUERY });
  const { products } = data;

  return { props: { products } };
};

export default Products;
