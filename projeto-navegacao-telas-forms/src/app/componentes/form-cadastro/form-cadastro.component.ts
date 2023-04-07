import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent {
  constructor(private router: Router){}

  irParaCard(){
    this.router.navigate(['/card'])
  }

}
