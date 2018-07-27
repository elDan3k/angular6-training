import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooksModule} from './books/books.module';
import {Api} from './api';
import {routerModule} from './app.routing';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    SharedModule,
    routerModule
  ],
  providers: [
    Api
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
