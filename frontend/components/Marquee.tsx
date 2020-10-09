import React from "react";
import ReactMarkdown from "react-markdown";
import Malarquee from "react-malarquee";
import MARQUEE_QUERY from "@queries/marquee";
import { IMarquee } from "k-component";
import Query from "./Query";

const Marquee = () => (
  <div className="k-marquee">
    <Query query={MARQUEE_QUERY}>
      {({ marquee }: { marquee: IMarquee }) => {
        const { bundle } = marquee;
        if (!bundle.length) return <></>;

        return (
          <>
            <Malarquee fill={true} rate={60} hoverToPause={false}>
              {bundle.map((entry) => (
                <span key={entry.id}>
                  <ReactMarkdown source={entry.markdown} />
                </span>
              ))}
            </Malarquee>
          </>
        );
      }}
    </Query>
  </div>
);

export default Marquee;
