import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.filter') filter!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.filter = 'brightness(0.95)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.filter = 'brightness(1)';
  }
}
