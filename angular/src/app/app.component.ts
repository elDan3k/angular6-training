import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {SecurityService} from './security/service/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string;

  constructor(private router: Router, private translateService: TranslateService, private securityService:SecurityService) {
    securityService.user.subscribe(user => {
      this.username = user != null ? user.name : '';
    });
  }

  setLanguage(language: string) {
    this.translateService.use(language);
  }

  home() {
    this.router.navigateByUrl("/");
  }

  logout() {
    this.securityService.logout();
    this.router.navigateByUrl('login');
  }
}
