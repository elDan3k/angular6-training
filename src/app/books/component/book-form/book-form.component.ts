import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../model/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Input()
  book = new Book();
  @Output()
  save = new EventEmitter();
  @Output()
  cancel = new EventEmitter();

}
