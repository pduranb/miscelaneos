import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="section">
  <p class="title is-1 has-text-centered">DEMO ANGULAR</p>
  <hr>
  <div class="container box">
      <app-ng-style></app-ng-style>
  </div>
</div>
<div class="section">
  <div class="container box">
      <p class="title"> Scope de CSS</p>
      <app-css></app-css>

  </div>
</div>
<div class="section">
  <div class="container box">
      <p class="title"> Prueba de Ng-class</p>
      <app-clases></app-clases>

  </div>
</div>
<div class="section">
  <div class="container box">
      <p class="title"> Directivas personalizadas</p>
      <p [appResaltado]="'orange'">
          Hola Mundo
      </p>
  </div>
</div>
<div class="section">
  <div class="container box">
      <p class="title">Prueba Ng-Switch</p>
      <app-ng-switch></app-ng-switch>
  </div>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
