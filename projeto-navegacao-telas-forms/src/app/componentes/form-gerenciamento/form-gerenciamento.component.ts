import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-form-gerenciamento',
  templateUrl: './form-gerenciamento.component.html',
  styleUrls: ['./form-gerenciamento.component.css']
})
export class FormGerenciamentoComponent {

  id!: string
  nome!: string
  email!: string
  senha!: string
  img!: File;

  selecionarImagem(event: any): void {
    this.img = event.target.files[0];
  }

  mostrarTelaAtual = true;

  hide = true;

  constructor(private router: Router){}

  irParaCard(){
    this.mostrarTelaAtual = false;
    this.router.navigate(['/card'])
  }

  irParaTelaCadastro(){
    this.mostrarTelaAtual = false;
    this.router.navigate(['/'])
  }

//==================================================================================================================//
//==================================================================================================================//
  //get - só dá para pegar a array
  async pegarDado(){

    const url = "https://rhuna.herokuapp.com/crud"

    await axios.get(url)
      .then(response =>{
        let lista = response.data.length
        console.log("Recebido", response.data);
        this.id = response.data[lista - 1].id
        this.nome = response.data[lista - 1].nome
        this.email = response.data[lista - 1].email
        this.senha =  response.data[lista - 1].senha
        this.img = response.data[lista - 1].file
      })
      .catch(function(error){
        console.log("Erro", error);
      })
      .finally(function(){
      });
  }
//==================================================================================================================//
//==================================================================================================================//
  //put - ok
  atualizarDado(){

    const url = "https://rhuna.herokuapp.com/crud/" + this.id;

    const formData = new FormData();
      formData.append("nome", this.nome)
      formData.append("email", this.email)
      formData.append("senha", this.senha)
      formData.append("file", this.img);

    axios.put(url, formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log ("Resposta recebida", response.data);
      })
      .catch(error => {
        console.error("Erro", error);
      });
  }
//==================================================================================================================//
//==================================================================================================================//
}
