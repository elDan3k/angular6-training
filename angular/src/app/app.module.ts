import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooksModule} from './books/books.module';
import {Api} from './api';
import {routerModule} from './app.routing';
import {SharedModule} from './shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader,TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SecurityModule} from './security/security.module';
import {SecurityInterceptor} from './security/security.interceptor';
import {TokenInterceptor} from './security/token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    SharedModule,
    SecurityModule,
    routerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    Api,
    { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
