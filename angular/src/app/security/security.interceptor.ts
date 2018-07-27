import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap(event => {}, error => {
        if (error.status === 401 || error.status === 403) {
          this.router.navigateByUrl('login');
        }
      }));
  }

}
