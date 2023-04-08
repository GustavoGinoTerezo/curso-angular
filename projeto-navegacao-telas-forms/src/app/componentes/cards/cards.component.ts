import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  ngOnInit(){
    this.pegarDado()
  }

  url = "https://rhuna.herokuapp.com/crud/"

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
  rota!: string;
  rota1!: string;
  rota2!: string;
  img!: File;
  img1!: File;
  img2!: File;
  imgUrl!: string;
  imgUrl1!: string;
  imgUrl2!: string;

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
        this.rota = response.data[lista - 1].rota

        this.id1 = response.data[lista - 2].id
        this.nome1 = response.data[lista - 2].nome
        this.email1 = response.data[lista - 2].email
        this.senha1 =  response.data[lista - 2].senha
        this.rota1 = response.data[lista - 2].rota

        this.id2 = response.data[lista - 3].id
        this.nome2 = response.data[lista - 3].nome
        this.email2 = response.data[lista - 3].email
        this.senha2 =  response.data[lista - 3].senha
        this.rota2 = response.data[lista - 3].rota

        this.imgUrl = this.url + this.rota;
        this.imgUrl1 = this.url + this.rota1;
        this.imgUrl2 = this.url + this.rota2;
      })
      .catch(function(error){
        console.log("Erro", error);
      })
      .finally(function(){
      });
  }

  
}
