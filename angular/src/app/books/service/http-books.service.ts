import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BooksService} from './books.service';
import {Book} from '../model/book.model';
import {Api} from '../../api';

@Injectable()
export class HttpBooksService implements BooksService {

  constructor(private httpClient: HttpClient, private api: Api) {
  }

  getById(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.api.books}/${bookId}`);
  }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.api.books);
  }

  save(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.api.books, book);
  }

  update(book: Book): Observable<void> {
    return this.httpClient.put<void>(`${this.api.books}/${book.id}`, book);
  }

  remove(bookId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.api.books}/${bookId}`);
  }

  search(property: string, query: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.api.books}?${property}_like=${query}`);
  }

}
