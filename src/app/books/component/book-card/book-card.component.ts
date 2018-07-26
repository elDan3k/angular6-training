import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../model/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input()
  book: Book;
  @Input()
  isSelected = false;
  @Output()
  bookSelected = new EventEmitter();

  select() {
    this.bookSelected.emit(this.book);
  }

}
