import { Book } from '../model/book.model';
import {Inject, Injectable, Optional} from '@angular/core';
import {BooksService} from './books.service';
import {Observable, of, EMPTY} from 'rxjs';

@Injectable()
export class ArrayBooksService implements BooksService {

  constructor(@Inject('BooksData') @Optional() private readonly books: Book[]) {
    if (!books) {
      this.books = [];
    }
  }

  getAll(): Observable<Book[]> {
    return of(this.books);
  }

  save(book: Book): Observable<Book> {
    book.id = this.nextId;
    this.books.push(book);
    return of(book);
  }

  update(book: Book): Observable<void> {
    const bookIndex = this.findBookIndex(book.id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = book;
    }
    return EMPTY;
  }

  remove(bookId: number): Observable<void> {
    const bookIndex = this.findBookIndex(bookId);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex);
    }
    return EMPTY;
  }

  search(property: string, query: string): Observable<Book[]> {
    throw new Error("Not yet implemented");
  }

  private get nextId() {
    return Date.now();
  }

  private findBookIndex(bookId: number): number {
    return this.books.findIndex(currentBook => bookId === currentBook.id);
  }

}
