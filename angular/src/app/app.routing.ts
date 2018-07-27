import {Route, RouterModule} from "@angular/router";
import {environment} from "../environments/environment";

const routes: Route[] = [
  { path: '', redirectTo: 'books/dashboard', pathMatch: 'full' },
];

export const routerModule = RouterModule.forRoot(routes, {
  enableTracing: environment.tracing
});
