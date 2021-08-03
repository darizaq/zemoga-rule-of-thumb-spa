import { APOLLO_OPTIONS } from 'apollo-angular';
import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { apolloOptionsFactory } from '@core/factories/apollo-options.factory';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageHelperService } from '@core/services/image-helper/image-helper.service';
import { RulingsService } from '@core/services/rulings/rulings.service';
import { translateBrowserLoaderFactory } from '@core/factories/translate-browser-loader.factory';

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
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    })
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: apolloOptionsFactory,
      deps: [HttpLink, TransferState]
    },
    ImageHelperService,
    RulingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
