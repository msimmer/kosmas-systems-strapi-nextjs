import React from "react";
import Link from "next/link";
import Query from "../Query";

const Items = ({ title, prop, pathname, query }) => (
  <li>
    {title}
    <ul>
      <Query query={query} id={null}>
        {(data) =>
          data[prop].map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={{
                    pathname,
                    query: { id: item.id },
                  }}
                >
                  <a className="uk-link-reset">{item.title}</a>
                </Link>
              </li>
            );
          })
        }
      </Query>
    </ul>
  </li>
);

export default Items;
