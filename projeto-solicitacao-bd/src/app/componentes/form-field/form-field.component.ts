import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {

  id!: string
  nome!: string
  email!: string
  senha!: string
  img!: File;

  selecionarImagem(event: any): void {
    this.img = event.target.files;
  }

//==================================================================================================================//
//==================================================================================================================//
  //post
  async criarDado(){

    const url = "https://crudcrud.com/api/7dab6c99d39d479e8919652c1a51a6d8/unicorns";

    /* não utilizei pois mudei o método para passar as informações
    const formData = new FormData();
      formData.append("nome", this.nome )
      formData.append("email", this.email )
      formData.append("senha", this.senha )
      formData.append("imagem", this.img);
    */

    //axios.post(url, formData) => como era

    await axios.post(url, { // = > como ficou
      nome: this.nome,
      email: this.email,
      senha: this.senha
    })
      .then(function(response){
        console.log("Funcionando", response);
      })
      .catch(function (error){
        console.error("Erro", error);
      });
  }
//==================================================================================================================//
//==================================================================================================================//
  //get
  async pegarDado(){

    const url = "https://crudcrud.com/api/7dab6c99d39d479e8919652c1a51a6d8/unicorns/" + this.id;
    //id = 642ccc67308c9903e84ec35a

    await axios.get(url)
      .then(response =>{
        console.log("Recebido", response.data);
        this.nome = response.data.nome //usado na API unicorn
        this.email = response.data.email
        this.senha =  response.data.senha

        //this.nome = response.data.title; => usado na API do professor
        //this.email = response.data.email;
        //this.senha = response.data.senha;
      })
      .catch(function(error){
        console.log("Erro", error);
      })
      .finally(function(){
      });
  }
//==================================================================================================================//
//==================================================================================================================//
  //put
  atualizarDado(){

    const url = "https://crudcrud.com/api/7dab6c99d39d479e8919652c1a51a6d8/unicorns/" + this.id;

    /*
    const formData = new FormData();
      formData.append("nome", this.nome )
      formData.append("email", this.email )
      formData.append("senha", this.senha )
      formData.append("imagem", this.img);
    */

    axios.put(url, {
      nome: this.nome,
      email: this.email,
      senha: this.senha
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
  //delete
  deletarDado(){

    const url = "https://crudcrud.com/api/7dab6c99d39d479e8919652c1a51a6d8/unicorns/" + this.id;

    axios.delete(url)
    .then(response => {
      console.log("Dado deletado", response.data);
    })
    .catch(error => {
      console.log("Erro", error);
    });
  }
}
//==================================================================================================================//
//==================================================================================================================//

