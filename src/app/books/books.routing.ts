import {Route, RouterModule} from "@angular/router";
import {BooksPanelComponent} from "./component/books-panel/books-panel.component";
import {BooksListComponent} from "./component/books-list/books-list.component";
import {BookFormComponent} from "./component/book-form/book-form.component";
import {BookResolver} from "./book.resolver";
import {environment} from "../../environments/environment";

const routes: Route[] = [
  {
    path: 'books/dashboard',
    component: BooksPanelComponent
  },
  {
    path: 'books/list',
    component: BooksListComponent,
    data: { env: environment }
  },
  {
    path: 'books/list/:id',
    component: BookFormComponent,
    resolve: { book: BookResolver }
  }
];

export const routerModule = RouterModule.forChild(routes);
