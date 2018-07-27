import { Component } from '@angular/core';
import { SecurityService } from "../../service/security.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  credentials = {
    username : "",
    password : ""
  };
  loginError = false;
  isLoading = false;

  constructor(private securityService: SecurityService, private router: Router) {
  }

  login() {
    this.isLoading = true;
    this.securityService.login(this.credentials.username, this.credentials.password)
      .subscribe(
        () => this.router.navigateByUrl('/'),
        (ex) => { this.isLoading = false; this.loginError = true; console.log(ex); }
      )
  }

}
