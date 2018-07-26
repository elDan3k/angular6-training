import {Observable} from 'rxjs';
import {Book} from '../model/book.model';

export interface BooksService {

  getAll(): Observable<Book[]>

  save(book: Book): Observable<Book>

  update(book: Book): Observable<void>

  remove(bookId: number): Observable<void>

  search(property: string, query: string): Observable<Book[]>

}
