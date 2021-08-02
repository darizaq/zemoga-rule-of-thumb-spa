import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { setContext } from '@apollo/client/link/context';

/**
 * Factory to handle apollo-angular client configuration
 *
 * @param httpLink - Apollo HttpLink instance
 * @param transferState - Angular TransferState instance
 */
export const apolloOptionsFactory = (httpLink: HttpLink, transferState: TransferState) => {
  const stateKey: StateKey<Record<string, string>> = makeStateKey<Record<string, string>>('API_CONFIG');
  const apiConfig = transferState.get(stateKey, null);
  const headers = setContext(() => ({
    headers: { 'x-api-key': apiConfig?.apiKey }
  }));

  return {
    cache: new InMemoryCache(),
    link: ApolloLink.from([headers, httpLink.create({ uri: apiConfig?.apiUrl })])
  };
};
