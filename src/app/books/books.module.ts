import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookCardComponent} from './component/book-card/book-card.component';
import {SharedModule} from '../shared/shared.module';
import {BookFormComponent} from './component/book-form/book-form.component';
import {FormsModule} from '@angular/forms';
import {BooksPanelComponent} from './component/books-panel/books-panel.component';
import {ArrayBooksService} from './service/array-books.service';
import booksData from './model/books.data';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksPanelComponent
  ],
  providers: [
    ArrayBooksService,
    {
      provide: 'BooksData',
      useValue: booksData
    }
  ],
  exports: [
    BooksPanelComponent
  ]
})
export class BooksModule {
}
