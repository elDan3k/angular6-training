import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {BooksService} from '../../service/books.service';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.css']
})
export class BooksSearchComponent {

  searchForm = new FormGroup({
    'search': new FormControl()
  });

  @Output()
  searchBooks = new EventEmitter()

  constructor(@Inject("BooksService") private booksService: BooksService) {
    this.searchForm.get('search').valueChanges
      .pipe(debounceTime(500))
      //.filter(text => text.length > 3)
      .subscribe(query => this.searchBooks.emit(this.booksService.search("title", query)));
  }

}
