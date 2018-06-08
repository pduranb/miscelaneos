import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(public router: ActivatedRoute) {
    this.router.parent.params.subscribe(parametros => {
      console.log('Ruta Hija Nuevo');
      console.log(parametros);
    });
  }

  ngOnInit() {
  }

}
