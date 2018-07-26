import {Component} from '@angular/core';
import {Book} from '../../model/book.model';
import {ArrayBooksService} from '../../service/array-books.service';

@Component({
  selector: 'app-books-panel',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.css']
})
export class BooksPanelComponent {

  books: Book[] = [];
  selectedBook: Book = null;
  editedBook: Book = null;

  constructor(private bookService: ArrayBooksService) {
    this.refresh();
  }

  select(book: Book) {
    this.selectedBook = book;
    this.editedBook = Object.assign({}, book);
  }

  save(book: Book) {
    if (book.id) {
      this.bookService.update(book);
    } else {
      this.bookService.save(book);
    }
    this.reset();
  }

  reset() {
    this.selectedBook = null;
    this.editedBook = null;
  }

  add() {
    this.editedBook = new Book();
  }

  remove() {
    this.bookService.remove(this.editedBook.id);
    this.reset();
  }

  refresh() {
    this.books = this.bookService.getAll();
  }

}
