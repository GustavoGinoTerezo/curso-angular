import { Router } from '@angular/router';
import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  mostrarTelaAtual = true;

  constructor(private router: Router){}

  id!: string
  id1!: string
  id2!: string
  nome!: string
  nome1!: string
  nome2!: string
  email!: string
  email1!: string
  email2!: string
  senha!: string
  senha1!: string
  senha2!: string
  img!: File;
  img1!: File;
  img2!: File;

  IrParaCadastro(){
    this.router.navigate(['/'])
  }

  irParaGerenciamento(){
    this.mostrarTelaAtual = false;
    this.router.navigate(['/gerenciamento'])
  }

  public async pegarDado(){

    const url = "https://rhuna.herokuapp.com/crud"

    await axios.get(url)
      .then(response =>{
        console.log("Recebido", response.data);

        let lista = response.data.length
        this.id = response.data[lista - 1].id
        this.nome = response.data[lista - 1].nome
        this.email = response.data[lista - 1].email
        this.senha =  response.data[lista - 1].senha
      })
      .catch(function(error){
        console.log("Erro", error);
      })
      .finally(function(){
      });
  }
}
