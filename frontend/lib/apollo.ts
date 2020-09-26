import { useMemo } from "react";
import fetch from "isomorphic-unfetch";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";

// https://github.com/lfades/next-with-apollo/issues/114
let apolloClient: any; //ApolloClient<NormalizedCacheObject>;

const GRAPHQL_URL = process.env.API_URL || "http://localhost:1337";

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createHttpLink({
      fetch,
      uri: `${GRAPHQL_URL}/graphql`,
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState?: NormalizedCacheObject) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
