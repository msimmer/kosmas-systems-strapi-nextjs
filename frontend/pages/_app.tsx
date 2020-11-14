import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { ApolloProvider } from "@apollo/react-hooks";
import Navigation from "@components/Navigation";
import Marquee from "@components/Marquee";
import UIKitCircles from "@components/UIKitCircles";
import UIKitClose from "@components/UIKitClose";
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
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Kosmas Systems</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="k-marquee-header uk-width-1">
        <Marquee />
      </div>

      <button className="k-sidebar-toggle uk-hidden@m" onClick={handleClick}>
        <span className="uk-icon-button">
          {open ? <UIKitClose /> : <UIKitCircles />}
        </span>
      </button>

      <div
        className={`k-sidebar k-sidebar-${
          open ? "active" : "inactive"
        } uk-width-1-5@m`}
      >
        <Navigation handleClick={handleClick} />
      </div>

      <main className="uk-width-4-5@m uk-margin-auto-left@m">
        <div className="k-text-random">
          <Link href="/shop">
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
