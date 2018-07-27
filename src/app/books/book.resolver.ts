import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Book} from "./model/book.model";
import {Observable} from "rxjs";
import {BooksService} from "./service/books.service";
import {Inject} from "@angular/core";

export class BookResolver implements Resolve<Book> {

  constructor(@Inject('BooksService') private booksService: BooksService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    return this.booksService.getById(+route.paramMap.get('id'));
  }

}
