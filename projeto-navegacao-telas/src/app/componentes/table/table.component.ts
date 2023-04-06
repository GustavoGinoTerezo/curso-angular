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
}
