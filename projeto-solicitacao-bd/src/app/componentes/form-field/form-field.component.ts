import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Injectable } from '@angular/core';
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
    const url = 'https://jsonplaceholder.typicode.com/todos/5'
    axios.get(url,{ })
      .then(response =>{
        console.log("Recebido", response.data);
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
      formData.append('id', this.nome )
      formData.append('title', this.email )
      //formData.append('senha', this.senha )
      //formData.append('imagem', this.img);

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

    const url = 'https://rhuna.herokuapp.com/crud/6';

    const formData = new FormData();
      formData.append('nome', this.nome )
      formData.append('email', this.email )
      formData.append('senha', this.senha )
      formData.append('imagem', this.img);

    axios.put(url, formData)
      .then(response => {
        console.log ("Resposta recebida", response.data);
      })
      .catch(error => {
        console.error("Erro", error);
      });

  }



}


