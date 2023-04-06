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
    this.img = event.target.files[0];
  }

  //url = https://crudcrud.com/api/7dab6c99d39d479e8919652c1a51a6d8/unicorns/
  //id = 642ccc67308c9903e84ec35a

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

    await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
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
  //get - só dá para pegar a array
  async pegarDado(){

    const url = "https://rhuna.herokuapp.com/crud"

    await axios.get(url)
      .then(response =>{
        console.log("Recebido", response.data);
        this.nome = response.data.nome
        this.email = response.data.email
        this.senha =  response.data.senha
        this.img = response.data.file
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
  //delete - ok
  deletarDado(){

    const url = "https://rhuna.herokuapp.com/crud/delete/" + this.id;

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

