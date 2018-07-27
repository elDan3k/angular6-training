import {Injectable, Injector} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {SecurityService} from "./service/security.service";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private tokenType = 'bearer';
  private securityService: SecurityService;

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.securityService == null) {
      this.securityService = this.injector.get(SecurityService);
    }
    let token = this.securityService.getToken();
    if (token !== "") {
      let authorizedRequest = request.clone({
        headers: request.headers.set('Authorization', `${this.tokenType} ${token}`)
      });
      return next.handle(authorizedRequest);
    } else {
      return next.handle(request);
    }
  }

}
