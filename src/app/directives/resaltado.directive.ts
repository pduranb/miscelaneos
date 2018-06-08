import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appResaltado') nuevoColor: string;
  constructor( private el: ElementRef) {
    console.log('Directiva llamada');
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.resaltar( null );
  }
  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
