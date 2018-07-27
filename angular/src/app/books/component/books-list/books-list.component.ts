import {Component, Inject} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../model/book.model";
import {BooksService} from "../../service/books.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {

  books: Observable<Book[]>;

  constructor(@Inject('BooksService') private booksService: BooksService, route: ActivatedRoute) {
    this.books = this.booksService.getAll();
    console.log(route.snapshot.data.env);
  }

}
