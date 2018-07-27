import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingComponent} from './component/rating/rating.component';
import {CustomEmailValidator} from './validator/email.validator';
import {ErrorsComponent} from './component/errors/errors.component';
import {HighlightDirective} from './directive/highlight.directive';
import {RepeatDirective} from './directive/repeat.directive';
import {CapitalizePipe} from './pipe/capitalize.pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RatingComponent,
    CustomEmailValidator,
    ErrorsComponent,
    HighlightDirective,
    RepeatDirective,
    CapitalizePipe
  ],
  exports: [
    RatingComponent,
    CustomEmailValidator,
    ErrorsComponent,
    HighlightDirective,
    RepeatDirective,
    CapitalizePipe
  ]
})
export class SharedModule {
}
