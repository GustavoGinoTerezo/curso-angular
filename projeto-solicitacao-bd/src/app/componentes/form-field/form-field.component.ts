import { Component, NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import axios from 'axios';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {

  nome?: string

  pegarDado(): void {
    axios.get('https://rhuna.herokuapp.com/crud',{
      params: {
        ID: 6
      }
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
      console.log(error);
      })
      .finally(function(){
      });
  }
}

