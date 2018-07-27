import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private translateService: TranslateService) {
  }

  setLanguage(language: string) {
    this.translateService.use(language);
  }

  home() {
    this.router.navigateByUrl("/");
  }

}
