import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {

  id: string = ""
  nome: string = ""
  email: string = ""
  senha: string = ""
  img!: File;

  selecionarImagem(event: any): void {
    this.img = event.target.files;
  }

  //get
  pegarDado(){

    const url = 'https://rhuna.herokuapp.com/crud'

    axios.get(url,{
      params: {id: this.id}
    })
      .then(response =>{
        console.log("Recebido", response.data);
        this.nome = response.data.nome;
        this.email = response.data.email;
        this.senha = response.data.senha;
      })
      .catch(function(error){
        console.log("Erro", error);
      })
      .finally(function(){
      });
  }

  //post
  criarDado(){

    const url = 'https://rhuna.herokuapp.com/crud';

    const formData = new FormData();
      formData.append('nome', this.nome )
      formData.append('email', this.email )
      formData.append('senha', this.senha )
      formData.append('imagem', this.img);

    axios.post(url, formData)
      .then(function(response){
        console.log("Funcionando", response);
      })
      .catch(function (error){
        console.error("Erro", error);
      });
  }

  //put
  atualizarDado(){

    const url = 'https://rhuna.herokuapp.com/crud';

    const formData = new FormData();
      formData.append('nome', this.nome )
      formData.append('email', this.email )
      formData.append('senha', this.senha )
      formData.append('imagem', this.img);

    axios.put(url, formData, {
      params: {id: this.id}
    })
      .then(response => {
        console.log ("Resposta recebida", response.data);
      })
      .catch(error => {
        console.error("Erro", error);
      });
  }

  //delete
  deletarDado(){

    const url = 'https://rhuna.herokuapp.com/crud/delete';

    axios.delete(url, {
      params: {id: this.id}
    })
    .then(response => {
      console.log('Dado deletado', response.data);
    })
    .catch(error => {
      console.log('Erro', error);
    });
  }

}


