import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../model/book.model";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Input()
  book: Book;
  @Output()
  save = new EventEmitter();
  @Output()
  cancel = new EventEmitter();
  genres = ['Horror', 'Adventure', 'Drama', 'Romans'];
  ratings = [1, 2, 3, 4 ,5];
  isEnabled = true;

  constructor(private route: ActivatedRoute, router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.book = this.route.snapshot.data.book;
        this.isEnabled = false;
      }
    });
  }

  saveBook(bookForm) {
    if (bookForm.valid) {
      this.save.emit(this.book);
    }
  }
}
