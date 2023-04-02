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






  //nome: string = ""

  //get
  pegarDado(){
    const url = 'https://rhuna.herokuapp.com/crud'
    axios.get(url,{ })
      .then(response =>{
        console.log(response.data);
        //this.nome = response.data.nome;
      })
      .catch(function(error){
        console.log(error);
      })
      .finally(function(){
      });
  }

  //put
  atualizarDado(){

    const url = 'https://rhuna.herokuapp.com/crud/id';

    const formData = new FormData();

    const input = document.getElementById('fileinput') as HTMLInputElement;

    if(input.files && input.files.length >0) {
    formData.append('arquivo', input.files[0]);
    
    }
  }
}


