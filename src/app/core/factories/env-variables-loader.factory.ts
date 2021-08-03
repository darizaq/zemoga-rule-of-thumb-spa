import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';

/**
 * Loads environment variables on server side and expose the to client app with TransferState
 *
 * @param transferState - TransferState instance
 */
export const envVariablesLoaderFactory = (transferState: TransferState) => {
  const { API_URL, API_KEY } = process.env;
  const stateKey: StateKey<Record<string, string>> = makeStateKey<Record<string, string>>('API_CONFIG');
  const apiConfigValues: Record<string, string | undefined> = {
    apiUrl: API_URL,
    apiKey: API_KEY
  };

  transferState.set(stateKey, apiConfigValues);
};
