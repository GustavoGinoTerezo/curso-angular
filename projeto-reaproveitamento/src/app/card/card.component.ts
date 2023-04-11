import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  hide = true

  mostrarTelaAtual = true

  id!: string
  nome!: string
  email!: string
  senha!: string
  img!: File;

}
