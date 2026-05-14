import {
  ApolloClient,
  InMemoryCache,
  gql as apolloGql,
  createHttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.WP_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.WP_JWT_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

let wpApolloClient: ApolloClient<NormalizedCacheObject> | null = null;

export function getWpApolloClient() {
  if (!wpApolloClient || typeof window === "undefined") {
    wpApolloClient = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: "network-only",
          errorPolicy: "all",
        },
      },
    });
  }
  return wpApolloClient;
}

export const gql = apolloGql;
