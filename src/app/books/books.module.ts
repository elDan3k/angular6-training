import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookCardComponent} from './component/book-card/book-card.component';
import {SharedModule} from '../shared/shared.module';
import {BookFormComponent} from './component/book-form/book-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BooksPanelComponent} from './component/books-panel/books-panel.component';
import {HttpBooksService} from './service/http-books.service';
import {BooksSearchComponent} from './component/books-search/books-search.component';
import {HttpClientModule} from '@angular/common/http';
import {BooksListComponent} from './component/books-list/books-list.component';
import {routerModule} from './books.routing';
import booksData from './model/books.data';
import {BookResolver} from './book.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    routerModule
  ],
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksSearchComponent,
    BooksPanelComponent,
    BooksListComponent
  ],
  providers: [
    //ArrayBooksService,
    {
      provide: 'BooksService',
      useClass: HttpBooksService
    },
    {
      provide: 'BooksData',
      useValue: booksData
    },
    BookResolver
    /*
    ,{
      provide: 'BooksService',
      useFactory: booksServiceFactory,
      deps: ['BooksData']
    }
  */
  ],
  exports: [
    BooksPanelComponent
  ]
})
export class BooksModule {
}

/*
function booksServiceFactory(booksData: Book[]) {
  return new ArrayBooksService(booksData);
}
*/
