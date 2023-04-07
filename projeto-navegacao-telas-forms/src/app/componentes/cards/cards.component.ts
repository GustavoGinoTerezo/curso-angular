import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor(private router: Router){}

  IrParaCadastro(){
    this.router.navigate(['/'])
  }
}
