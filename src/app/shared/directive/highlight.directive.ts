import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  color: string;
  private readonly originalColor: string;

  constructor(private element: ElementRef) {
    this.originalColor = element.nativeElement.style.color;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.color || 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(this.originalColor);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.color = color;
  }

}
