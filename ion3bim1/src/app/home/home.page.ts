import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gasolina = undefined;
  etanol = undefined;
  resposta = undefined;

  constructor() {}

  verificar(): void{
    this.resposta = this.etanol / this.gasolina;
  }
}
