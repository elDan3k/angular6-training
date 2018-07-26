import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingComponent} from './component/rating/rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RatingComponent
  ],
  exports: [
    RatingComponent
  ]
})
export class SharedModule {
}
