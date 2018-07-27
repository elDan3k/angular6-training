import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingComponent} from './component/rating/rating.component';
import {CustomEmailValidator} from './validator/email.validator';
import {ErrorsComponent} from './component/errors/errors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RatingComponent,
    CustomEmailValidator,
    ErrorsComponent
  ],
  exports: [
    RatingComponent,
    CustomEmailValidator,
    ErrorsComponent
  ]
})
export class SharedModule {
}
