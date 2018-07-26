import {Component, Inject} from '@angular/core';
import {Book} from '../../model/book.model';
import {BooksService} from '../../service/books.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-books-panel',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.css']
  //, providers: []
})
export class BooksPanelComponent {

  books: Book[] = [];
  selectedBook: Book = null;
  editedBook: Book = null;
  isProcessing = false;
  subscription: Subscription;

  constructor(@Inject('BooksService') private bookService: BooksService) {
    this.refresh();
  }

  select(book: Book) {
    this.selectedBook = book;
    this.editedBook = Object.assign({}, book);
  }

  save(book: Book) {
    if (book.id) {
      this.subscribe(this.bookService.update(book));
    } else {
      this.subscribe(this.bookService.save(book));
    }
    this.reset();
  }

  private subscribe(observable: Observable<any>) {
    this.isProcessing = true;
    observable.subscribe(() => this.refresh());
  }

  reset() {
    this.selectedBook = null;
    this.editedBook = null;
  }

  add() {
    this.editedBook = new Book();
  }

  remove() {
    this.subscribe(this.bookService.remove(this.editedBook.id));
    this.reset();
  }

  refreshBooks(observable: Observable<Book[]>) {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
    this.subscription = observable.subscribe(
      books => this.books = books,
      ex => { console.log(ex); this.isProcessing = false; },
      () => this.isProcessing = false
      );
  }

  refresh() {
    this.isProcessing = true;
    this.refreshBooks(this.bookService.getAll());
  }

}
