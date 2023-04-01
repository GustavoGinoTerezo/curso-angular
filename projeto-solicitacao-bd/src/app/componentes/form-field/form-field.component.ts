import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {

  constructor(private http: HttpClient){}

  //nome: string = ""

  pegarDado(){
    const url = 'https://rhuna.herokuapp.com/crud?id=7'
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
    
  }

}
