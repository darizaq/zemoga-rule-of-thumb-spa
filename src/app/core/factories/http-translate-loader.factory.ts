import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * Factory to handle translate JSON file load
 *
 * @param httpClient - HttpClient instance
 */
export const httpTranslateLoaderFactory = (httpClient: HttpClient) => {
  return new TranslateHttpLoader(httpClient);
};
