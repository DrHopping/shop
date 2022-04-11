import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export class BorderDirective {
  @Input() borderColor: string = 'red';
  @Input() borderStyle: 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'none' = 'none';

  private borderActive: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('click')
  onClick() {
    if(this.borderActive){
      this.renderer.setStyle(this.el.nativeElement, 'border', `${this.borderStyle} ${this.borderColor}`)
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border', `none`)
    }
    this.borderActive = !this.borderActive;
  }
}
