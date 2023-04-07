import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent {

  mostrarTelaAtual = true;

  hide = true;

  constructor(private router: Router){}

  irParaCard(){
    this.mostrarTelaAtual = false;
    this.router.navigate(['/card'])
  }


  id!: string
  nome!: string
  email!: string
  senha!: string
  img!: File;

  selecionarImagem(event: any): void {
    this.img = event.target.files[0];
  }


//==================================================================================================================//
//==================================================================================================================//

  //post - ok
  async criarDado(){

    const url = "https://rhuna.herokuapp.com/crud";

     const formData = new FormData();
       formData.append("nome", this.nome )
       formData.append("email", this.email )
       formData.append("senha", this.senha )
       formData.append("file", this.img);

    //  await axios.post(url, formData, {
    //    headers: {
    //      'Content-Type': 'multipart/form-data'
    //    }
    //  })
    //    .then(function(response){
    //      console.log("Funcionando", response);
    //    })
    //    .catch(function (error){
    //      console.error("Erro", error);
    //    });
   }
}
