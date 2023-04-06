import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  id!: string
  nome!: string
  email!: string
  senha!: string
  idPesquisar!: string
  nomePesquisar!: string
  emailPesquisar!: string
  senhaPesquisar!: string
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

        let lista = response.data.length
        this.idPesquisar = response.data[lista - 1].id
        this.nomePesquisar = response.data[lista - 1].nome
        this.emailPesquisar = response.data[lista - 1].email
        this.senhaPesquisar =  response.data[lista - 1].senha
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
