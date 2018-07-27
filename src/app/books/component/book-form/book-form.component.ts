import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../model/book.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input()
  book: Book;
  @Output()
  save = new EventEmitter();
  @Output()
  cancel = new EventEmitter();
  genres = ['Horror', 'Adventure', 'Drama', 'Romans'];
  ratings = [1, 2, 3, 4 ,5];
  isEnabled = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (!this.book) {
      this.book = this.route.snapshot.data.book;
      this.isEnabled = false;
    }
  }

  saveBook(bookForm) {
    if (bookForm.valid) {
      this.save.emit(this.book);
    }
  }
}
