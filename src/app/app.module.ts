import { APOLLO_OPTIONS } from 'apollo-angular';
import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { apolloOptionsFactory } from '@core/factories/apollo-options.factory';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { httpTranslateLoaderFactory } from '@core/factories/http-translate-loader.factory';
import { ImageHelperService } from '@core/services/image-helper/image-helper.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: apolloOptionsFactory,
      deps: [HttpLink, TransferState]
    },
    ImageHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
