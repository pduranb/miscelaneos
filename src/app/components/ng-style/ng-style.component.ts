import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p class="title" [style.fontSize.px]="tamano" >
      Probando Ng-style
    </p>

    <p class="buttons">
    <a class="button is-primary" (click)="tamano = tamano + 5">
    <span class="icon"><i class="fa fa-plus"> </i></span> </a>

    <a class="button is-danger" (click)="tamano = tamano - 5">
    <span class="icon"><i class="fa fa-minus"> </i></span> </a>
    </p>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 30;

  constructor() { }

  ngOnInit() {
  }

}
