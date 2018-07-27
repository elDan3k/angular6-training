import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './component/login-form/login-form.component';
import {routerModule} from "./security.routing";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SecurityService} from "./service/security.service";
import {SecurityGuard} from "./security.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    routerModule
  ],
  providers: [
    SecurityService,
    SecurityGuard
  ],
  declarations: [
    LoginFormComponent
  ]
})
export class SecurityModule { }
