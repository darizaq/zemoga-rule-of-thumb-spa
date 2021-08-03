import { join } from 'path';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';
import { readFileSync } from 'fs';
import { TranslateLoader } from '@ngx-translate/core';

type serverLoader = (transferState: TransferState) => TranslateServerLoader;

class TranslateServerLoader implements TranslateLoader {
  constructor(
    private transferState: TransferState,
    private prefix: string = 'i18n',
    private suffix: string = '.json'
  ) {}

  /**
   * Loads translation data on server side
   *
   * @param lang - Translation language
   * @returns Observable for translation data
   */
  public getTranslation(lang: string): Observable<Record<string, string>> {
    return new Observable((observer: Subscriber<Record<string, string>>) => {
      let jsonData: Record<string, string> = {};

      try {
        const assetsFolder = join(process.cwd(), 'dist', 'zemoga-rule-of-thumb-spa', 'browser', 'assets', this.prefix);
        const filePath = `${assetsFolder}/${lang}${this.suffix}`;
        const stateKey: StateKey<Record<string, string>> = makeStateKey<Record<string, string>>(
          `transfer-translate-${lang}`
        );

        jsonData = JSON.parse(readFileSync(filePath, 'utf8'));

        this.transferState.set(stateKey, jsonData);
      } catch (error: unknown) {
        console.log(`Failed to load translation data. Language: ${lang}`);
        console.error(error);
      }

      observer.next(jsonData);
      observer.complete();
    });
  }
}

export const translateServerLoaderFactory: serverLoader = (transferState: TransferState) =>
  new TranslateServerLoader(transferState);
