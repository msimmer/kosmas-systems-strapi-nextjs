import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { ApolloProvider } from "@apollo/react-hooks";
import Navigation from "@components/Navigation";
import Marquee from "@components/Marquee";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useApollo } from "../lib/apollo";

import "../assets/css/style.css";

// UIkit CSS
import "uikit/dist/css/uikit.css";
import "../styles/globals.css";

// loads the Icon plugin
UIkit.use(Icons);

const RandomTitle = dynamic(() => import("@components/RandomTitle"), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Kosmas Systems</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"></script>
      </Head>

      <div className="k-marquee-header uk-width-1">
        <Marquee />
      </div>

      <div className="k-sidebar uk-width-1-5@s">
        <Navigation />
      </div>

      <main className="uk-width-4-5@s uk-margin-auto-left@s">
        <div className="k-text-random">
          <Link href="/">
            <strong>
              <a>
                <RandomTitle />
              </a>
            </strong>
          </Link>
        </div>

        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
};

export default App;
