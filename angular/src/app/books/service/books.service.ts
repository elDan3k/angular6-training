import {Observable} from 'rxjs';
import {Book} from '../model/book.model';
import {ResultPage} from '../../shared/model/result-page';

export interface BooksService {

  getById(bookId: number): Observable<Book>

  getAll(): Observable<ResultPage<Book>>

  save(book: Book): Observable<Book>

  update(book: Book): Observable<void>

  remove(bookId: number): Observable<void>

  search(property: string, query: string): Observable<Book[]>

}
