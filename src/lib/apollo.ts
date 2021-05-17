import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from '@apollo/client';

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}`,
    },
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

let apolloClient: ApolloClient<NormalizedCacheObject>;
export function initializeApollo() {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo() {
  return initializeApollo();
}
