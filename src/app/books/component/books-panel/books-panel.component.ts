import {Component, Input} from '@angular/core';
import {Book} from '../../model/book.model';

@Component({
  selector: 'app-books-panel',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.css']
})
export class BooksPanelComponent {

  @Input()
  books: Book[] = [];
  selectedBook: Book = null;
  editedBook: Book = null;

  select(book: Book) {
    this.selectedBook = book;
    this.editedBook = Object.assign({}, book);
  }

  save(book: Book) {
    if (book.id) {
      Object.assign(this.selectedBook, book);
    } else {
      book.id = this.nextId;
      this.books.push(book);
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
    const bookIndex = this.findBookIndex(this.editedBook);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex);
    }
    this.reset();
  }

  private get nextId(): number {
    return Date.now();
  }

  private findBookIndex(book: Book): number {
    return this.books.findIndex(currentBook => book.id === currentBook.id);
  }

}
