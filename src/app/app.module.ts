import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooksModule} from './books/books.module';
import {Api} from './api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule
  ],
  providers: [
    Api
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
