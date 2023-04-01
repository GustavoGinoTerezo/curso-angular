import { HttpClient, HttpClientModule } from '@angular/common/http';
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

  nome: string = ""

  pegarDado(): void {
    axios.get('https://rhuna.herokuapp.com/crud',{
      })
      .then(response =>{
        console.log(response.data);
        this.nome = response.data.nome;
      })
      .catch(function(error){
      console.log(error);
      })
      .finally(function(){
      });
  }
}
