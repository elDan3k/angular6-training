import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookCardComponent} from './component/book-card/book-card.component';
import {SharedModule} from '../shared/shared.module';
import {BookFormComponent} from './component/book-form/book-form.component';
import {FormsModule} from '@angular/forms';
import {BooksPanelComponent} from './component/books-panel/books-panel.component';

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
  exports: [
    BooksPanelComponent
  ]
})
export class BooksModule {
}
