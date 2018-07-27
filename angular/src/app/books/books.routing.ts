import {Route, RouterModule} from "@angular/router";
import {BooksPanelComponent} from "./component/books-panel/books-panel.component";
import {BooksListComponent} from "./component/books-list/books-list.component";
import {BookFormComponent} from "./component/book-form/book-form.component";
import {BookResolver} from "./book.resolver";
import {environment} from "../../environments/environment";
import {SecurityGuard} from '../security/security.guard';

const routes: Route[] = [
  {
    path: 'books/dashboard',
    component: BooksPanelComponent,
    canActivate: [SecurityGuard]
  },
  {
    path: 'books/list',
    component: BooksListComponent,
    data: { env: environment },
    canActivate: [SecurityGuard],
    children: [
      {
        path: ':id',
        component: BookFormComponent,
        resolve: { book: BookResolver },
        canActivate: [SecurityGuard]
      }
    ]
  },
];

export const routerModule = RouterModule.forChild(routes);
