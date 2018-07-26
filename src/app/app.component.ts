import {Component} from '@angular/core';
import {Book} from './books/model/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[] = [];

  constructor() {
    const book = new Book();
    book.id = 1;
    book.title = 'Angular in action';
    book.authors = 'Jan Kowalski';
    book.rating = 4;
    this.books.push(book);
  }
}
