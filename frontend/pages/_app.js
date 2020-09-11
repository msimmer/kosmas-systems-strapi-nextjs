import React from "react";
import Head from "next/head";
import "../assets/css/style.css";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import Menu from "../components/Navigation";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

// UIkit CSS
import "uikit/dist/css/uikit.css";

// loads the Icon plugin
UIkit.use(Icons);

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Head>
      <title>Kosmas Systems</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Menu />
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withData(App);
