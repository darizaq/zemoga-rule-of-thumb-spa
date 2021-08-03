import { Observable, Subscriber } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

type browserLoader = (httpClient: HttpClient, transferState: TransferState) => TranslateBrowserLoader;

class TranslateBrowserLoader implements TranslateLoader {
  constructor(private http: HttpClient, private transferState: TransferState) {}

  /**
   * Loads translation data on client side
   * Requests translation file only if translation data is not loaded in transfer state
   *
   * @param   lang Translation language
   * @returns      Observable for translation data
   */
  public getTranslation(lang: string): Observable<Record<string, string>> {
    const stateKey: StateKey<Record<string, string>> = makeStateKey<Record<string, string>>(
      `transfer-translate-${lang}`
    );
    const jsonData: Record<string, string> = this.transferState.get(stateKey, {});

    if (jsonData) {
      return new Observable((observer: Subscriber<Record<string, string>>) => {
        observer.next(jsonData);
        observer.complete();
      });
    }

    return new TranslateHttpLoader(this.http).getTranslation(lang) as Observable<Record<string, string>>;
  }
}

export const translateBrowserLoaderFactory: browserLoader = (httpClient: HttpClient, transferState: TransferState) =>
  new TranslateBrowserLoader(httpClient, transferState);
