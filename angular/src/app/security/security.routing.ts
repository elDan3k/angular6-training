import {Route, RouterModule} from "@angular/router";
import {LoginFormComponent} from "./component/login-form/login-form.component";

const routes: Route[] = [
  {
    path: 'login',
    component: LoginFormComponent
  }
];

export const routerModule = RouterModule.forChild(routes);
