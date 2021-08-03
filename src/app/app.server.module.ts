import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { TransferState } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { envVariablesLoaderFactory } from '@core/factories/env-variables-loader.factory';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { translateServerLoaderFactory } from '@core/factories/translate-server-loader.factory';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: envVariablesLoaderFactory,
      deps: [TransferState]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
