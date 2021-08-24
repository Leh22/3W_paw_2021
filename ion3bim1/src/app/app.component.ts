import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  gasolina = undefined;
  etanol = undefined;
  resposta = undefined;

  constructor() {}

  verificar(): void{
    this.resposta = this.etanol / this.gasolina;
  }
}
